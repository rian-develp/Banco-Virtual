import { ScrollView } from "react-native";
import { Header, HeaderTitle, SubTitle, Text, LayoutScreen } from "./styled";
import { Form } from "../../components/Form";
import { useState } from "react";
import { CustomButton } from '../../components/CustomButton'
import { PasswordForm } from "../../components/PasswordForm";
import { useNavigation } from "@react-navigation/native";
import { validDate } from '../../utils/functions/validDate';
import { validEmail } from '../../utils/functions/validEmail';
import { validNumberPhone } from '../../utils/functions/validNumberPhone';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const SignUp = () => {
    const baseUrl = "https://api-credit-card-792613245.development.catalystserverless.com/server/";
    let isValidEmail, isValidBirthdate, isValidNumberPhone = false;
    const navigation = useNavigation();
    const text = 'Com a sua carteira de cartões de crédito você pode fazer suas transações em qualquer lugar'
    const [data, setData] = useState({
        name: '',
        email: '',
        birthdate: '',
        numberPhone: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        birthdate: '',
        numberPhone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [confirmPassword, setConfirmPassword] = useState('');

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

    function validate() {
        isValidEmail = validEmail(data.email);
        isValidBirthdate = validDate(data.birthdate);
        isValidNumberPhone = validNumberPhone(data.numberPhone);

        isValidEmail ? handleError(null, 'email') : handleError('E-mail inválido', 'email');
        isValidBirthdate ? handleError(null, 'birthdate') : handleError('Data inválida', 'birthdate');
        isValidNumberPhone ? handleError(null, 'numberPhone') : handleError('Número inválido', 'numberPhone');
        
        if(data.name == ''){
            handleError("Por favor insira seu nome", 'name');
        } else {
            handleError(null, 'name');
        }

        if (data.password == '') {
            handleError("Crie uma senha", 'password')
        } else if (data.password.length < 6) {
            handleError("A senha deve ter no mínimo 6 caracteres", 'password');
            return;
        } else {
            handleError(null, 'password');
        }

        if (confirmPassword != data.password) {
            handleError("As senhas não estão iguais",'confirmPassword');
            return;
        } else {
            handleError(null, 'confirmPassword');
        }

        if (isValidEmail == true && isValidBirthdate == true && isValidNumberPhone == true && confirmPassword == data.password) {

            DoRequest("POST", "signup", data)
                .then((success) => success.code)
                .then((success) => {
                    if (success === 201) {
                        navigation.navigate("Acesso");
                    }
                })
                .catch((error) => {
                    handleError("E-mail inválido", 'email');
                    handleError("Senha inválida", 'password');
                    console.log(error);
                })
        }
    }

    function handleError(errorMessage, input) {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
    }

    function handleChangeText(text, input){
        setData((prevState) => ({ ...prevState, [input]: text }));
    }

    function handleConfirmPassword(text) {
        setConfirmPassword(text);
    }
    return (
        <LayoutScreen>
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ paddingBottom: 64 }}>

                <Header>
                    <MaterialIcons
                        color={'black'}
                        size={32}
                        name="lock" />
                    <HeaderTitle>CADASTRO</HeaderTitle>
                </Header>

                <SubTitle>Seja bem vindo!</SubTitle>
                <Text>{text}</Text>
                <SubTitle>Dados pessoais</SubTitle>
                <Form
                    label={'Nome e sobrenome'}
                    placeholder={'Por favor insira seu nome e sobrenome'}
                    autoCapitalize={'none'}
                    iconName={'person'}
                    marginTop={'56px'}
                    onChangeText={(text) => {
                        handleChangeText(text, 'name')
                        handleError(null, 'name');
                    }}
                    errorForm={errors.name}
                    marginDefinied={'42px'} />

                <Form
                    label={'Data de nascimento'}
                    placeholder={'Por favor insira sua data de nascimento'}
                    typeMask={"##/##/####"}
                    autoCapitalize={'none'}
                    iconName={'calendar-month'}
                    marginTop={'40px'}
                    onChangeText={(text) => {
                        handleChangeText(text, 'birthdate')
                        handleError(null, 'birthdate');
                    }}
                    errorForm={errors.birthdate} />

                <Form
                    label={'Telefone'}
                    placeholder={'Por favor insira seu número'}
                    typeMask={"(##) #####-####"}
                    autoCapitalize={'none'}
                    iconName={'smartphone'}
                    marginTop={'40px'}
                    onChangeText={(text) => {
                        handleChangeText(text, 'numberPhone');
                        handleError(null, 'numberPhone');
                    }}
                    errorForm={errors.numberPhone} />

                <Form
                    label={'Email'}
                    placeholder={'Por favor insira seu email'}
                    autoCapitalize={'none'}
                    iconName={'mail'}
                    marginTop={'40px'}
                    onChangeText={(text) => {
                        handleChangeText(text, 'email')
                        handleError(null, 'email');
                    }}
                    errorForm={errors.email} />

                <SubTitle
                    subtitlePaddingTop={'12px'}
                    subtitlePaddingBottom={'12px'}>Dados de acesso</SubTitle>

                <PasswordForm
                    marginTop={'24px'}
                    startIconName={'key'}
                    label={'Senha'}
                    placeholder={'por favor insira sua senha'}
                    onChangeText={(text) => {
                        handleChangeText(text, 'password')
                        handleError(null, 'password');
                    }}
                    errorForm={errors.password}/>

                <PasswordForm
                    marginTop={'40px'}
                    startIconName={'key'}
                    label={'Confirmar senha'}
                    placeholder={'por favor confirme a senha'}
                    onChangeText={(text) => {
                        handleConfirmPassword(text);
                        handleError(null, 'confirmPassword')
                    }}
                    errorForm={errors.confirmPassword}/>

                <CustomButton
                    disable={false}
                    marginTop={56}
                    text={'Cadastrar'}
                    onPress={validate} />

            </ScrollView>
        </LayoutScreen>
    );
}