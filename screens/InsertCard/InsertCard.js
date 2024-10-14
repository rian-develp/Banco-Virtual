import { Container, Header, HeaderTitle, LayoutScreen } from "./styled";
import { Card } from '../../components/Card/Card';
import { Form } from '../../components/Form'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CustomButton } from '../../components/CustomButton'
import { ScrollView } from "react-native";
import { handleCardName } from "../../utils/functions/handleCardName";
import { handleValidityCard } from "../../utils/functions/handleValidityCard";
import themes from "../../themes/themes";

export const InsertCard = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [nameCard, setNameCard] = useState('');
    const [validity, setValidity] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [numberCard, setNumberCard] = useState('');
    const [varState, setVarState] = useState(resultNameCard);
    let resultNameCard = '';

    const [errors, setErrors] = useState({
        nameCard: '',
        validity: '',
        numberCard: ''
    });

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
    }

    function resolve(text) {
        setNameCard(text);
        resultNameCard = handleCardName(text);
        setVarState(resultNameCard);
    }

    return (
        <LayoutScreen>
            <Header>
                <MaterialIcons name="arrow-back" size={24} color="white" style={{ paddingHorizontal: 16, paddingBottom: 16 }}
                    onPress={() => { navigation.goBack() }} />
                <HeaderTitle>{themes.STRINGS.INSERT_CARD_TITLE}</HeaderTitle>
            </Header>
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ paddingBottom: 64 }}>

                <Container>

                    <Card 
                        cardName={varState}
                        validityCard={validity}
                        customerName={customerName}
                        numberCard={numberCard}/>

                    <Form
                        marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                        label={themes.STRINGS.LABEL_NAME}
                        placeHolder={themes.STRINGS.PLACEHOLDER_CUSTOMER_NAME}
                        iconName={'person'}
                        onChangeText={(text) => { setCustomerName(text); }}/>

                    <Form
                        marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                        label={themes.STRINGS.LABEL_CARD_VALIDITY}
                        placeHolder={themes.STRINGS.PLACEHOLDER_CARD_VALIDITY}
                        iconName={'calendar-month'}
                        typeMask={'##/####'}
                        onChangeText={(text) => { 
                            handleError(null, 'validity')
                            setValidity(text) 
                        }}
                        error={errors.validity}/>

                    <Form
                        marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                        label={themes.STRINGS.LABEL_CARD_NUMBER}
                        placeHolder={themes.STRINGS.PLACEHOLDER_CARD_NUMBER}
                        iconName={'123'}
                        typeMask={'#### #### #### ####'}
                        onChangeText={(text) => { 
                            handleError(null, 'numberCard')
                            setNumberCard(text) 
                        }} 
                        error={errors.numberCard}/>

                </Container>

                <CustomButton
                    disable={false}
                    variant={false}
                    marginTop={themes.DIMENS.MARGIN_TOP32PX}
                    text={"Salvar"}
                    marginStart={0}
                    onPress={() => {
                        resultNameCard = handleCardName(nameCard);
                        let resultValidityCard = handleValidityCard(validity);

                        if(resultNameCard == false){
                            handleError(themes.ERRORS.INVALID_CARD, 'nameCard');
                        }

                        if(resultValidityCard == false){
                            handleError(themes.ERRORS.INVALID_DATE, 'validity');
                            return;
                        }

                        if(typeof(resultNameCard) === "string" && resultValidityCard == true){
                            const newData = {varState, validity, numberCard, customerName}
                            route.params.setData((prevData) => [...prevData, newData]);
                            navigation.goBack();
                        }
                    }}
                />
            </ScrollView>
        </LayoutScreen>
    );
}