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
                <HeaderTitle>Insert Card</HeaderTitle>
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
                        marginTop={'24px'}
                        label={'Nome do cartão'}
                        placeHolder={'Insira o nome do cartão'}
                        iconName={'credit-card'}
                        onChangeText={(text) => { 
                            handleError(null, 'nameCard');
                            resolve(text)          
                        }}
                        error={errors.nameCard}/>

                    <Form
                        marginTop={'32px'}
                        label={'Nome e Sobrenome'}
                        placeHolder={'Insira seu nome'}
                        iconName={'person'}
                        onChangeText={(text) => { setCustomerName(text); }}/>

                    <Form
                        marginTop={'32px'}
                        label={'Validade'}
                        placeHolder={'Insira a data de validade do cartão'}
                        iconName={'calendar-month'}
                        typeMask={'##/####'}
                        onChangeText={(text) => { 
                            handleError(null, 'validity')
                            setValidity(text) 
                        }}
                        error={errors.validity}/>

                    <Form
                        marginTop={'40px'}
                        label={'Número do cartão'}
                        placeHolder={'Insira o número do cartão'}
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
                    marginTop={32}
                    text={"Salvar"}
                    marginStart={0}
                    onPress={() => {
                        resultNameCard = handleCardName(nameCard);
                        let resultValidityCard = handleValidityCard(validity);

                        if(resultNameCard == false){
                            handleError("Cartão inválido", 'nameCard');
                        }

                        if(resultValidityCard == false){
                            handleError("Data inválida", 'validity');
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