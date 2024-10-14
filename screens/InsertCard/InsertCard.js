import { Container, Header, HeaderTitle, LayoutScreen } from "./styled";
import { Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Card } from '../../components/Card/Card';
import { Form } from '../../components/Form'
import { CustomButton } from '../../components/CustomButton'
import { handleCardName } from "../../utils/functions/handleCardName";
import { handleValidityCard } from "../../utils/functions/handleValidityCard";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const InsertCard = () => {
    const baseUrl = "https://api-credit-card-792613245.development.catalystserverless.com/server/";
    const navigation = useNavigation();
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
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
    }

    function resolve(text) {
        setNameCard(text);
        resultNameCard = handleCardName(text);
        setVarState(resultNameCard);
    }

    const DoRequest = async (method, endPoint, data) => {
        const response = await fetch(baseUrl + endPoint, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': 'xhjXi2YSrWVQ03c2johE3er4U3Cud24k5AzFUljrfm9LYC2YhykbJdGepiDIZwzJ.creditcard',
                'X-User-Id': '10205000000176097'
            },
            body: JSON.stringify(data),
        });

        var res = await response.json()

        console.log('REQUEST =>')
        console.log('POST => ' + baseUrl + endPoint)
        console.log('BODY => ' + JSON.stringify(data))
        console.log('\n\n ')
        console.log('RESULT =>')
        console.log('POST =>' + baseUrl + endPoint)
        console.log('CODE => ' + response.status)
        console.log('RESPONSE => ' + JSON.stringify(res, null, 2))

        return {
            code: response.status,
            body: res
        };
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
                        numberCard={numberCard} />

                    <Form
                        marginTop={'24px'}
                        label={'Nome do cartão'}
                        placeHolder={'Insira o nome do cartão'}
                        iconName={'credit-card'}
                        onChangeText={(text) => {
                            handleError(null, 'nameCard');
                            resolve(text)
                        }}
                        error={errors.nameCard} />

                    <Form
                        marginTop={'32px'}
                        label={'Nome e Sobrenome'}
                        placeHolder={'Insira seu nome'}
                        iconName={'person'}
                        onChangeText={(text) => { setCustomerName(text); }} />

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
                        error={errors.validity} />

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
                        error={errors.numberCard} />
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

                        if (resultNameCard == false) {
                            handleError("Cartão inválido", 'nameCard');
                        }

                        if (resultValidityCard == false) {
                            handleError("Data inválida", 'validity');
                            return;
                        }

                        if (typeof (resultNameCard) === "string" && resultValidityCard == true) {

                            const newData = {
                                cardName: varState,
                                cardValidity: validity,
                                cardNumber: numberCard,
                                customerName: customerName
                            }

                            DoRequest("POST", "cards", newData)
                                .then((success) => success.code)
                                .then((success) => {
                                    if (success === 201) {
                                        navigation.navigate("Home", newData);
                                    }
                                })
                                .catch((error) => {
                                    Alert.alert("Houve um erro")
                                    console.log(error);
                                })
                        }
                    }}
                />
            </ScrollView>
        </LayoutScreen>
    );
}