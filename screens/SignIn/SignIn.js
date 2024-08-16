import { ScrollView } from 'react-native'
import { Header, HeaderTitle, SubTitle, Text, LayoutScreen } from './styled';
import { CustomButton } from '../../components/CustomButton';
import { Form } from '../../components/Form';
import { PasswordForm } from '../../components/PasswordForm';
import { ToogleSwitch } from '../../components/ToogleSwitch';
import { validEmail } from '../../utils/functions/validEmail';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import themes from '../../themes/themes';


export const SignIn = () => {
    const baseUrl = 'https://api-credit-card-792613245.development.catalystserverless.com/server/'
    const navigation = useNavigation();
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    let isValidEmail = false;

    const validate = () =>{
        
        isValidEmail = validEmail(data.email);

        if(isValidEmail == false) {
            handleError("E-mail inválido", 'email');
        } else {handleError(null, 'email');}

        if(data.password < 5 || data.password == ''){
            handleError("Senha incorreta", 'password');
            return;
        } else {handleError(null, 'password');}~
        
        DoRequest("POST", "signin", data).then((success) => success.code)
        .then((success) => {
            if(success === 200) {
                navigation.navigate("Home");
            }
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    const DoRequest = async (method, endPoint, data) => {
        const response = await fetch(baseUrl+endPoint, {
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
        console.log('POST => '+baseUrl+endPoint)
        console.log('BODY => '+JSON.stringify(data))
        console.log('\n\n ')
        console.log('RESULT =>')
        console.log('POST =>'+baseUrl+endPoint)
        console.log('CODE => '+response.status)
        console.log('RESPONSE => '+JSON.stringify(res, null, 2))
        
        return {
        code: response.status,
        body: res
        };
    }

    const handleChangeText = (text, data) => {
        setData((prevState) => ({...prevState, [data]: text}));
    }

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
    }

    return (
        <LayoutScreen>
            <ScrollView contentContainerStyle={{paddingBottom: 56}}>
                <Header>
                    <MaterialIcons name='lock' size={32} color={'#000000'}/>
                    <HeaderTitle>{themes.STRINGS.SIGNIN_TITLE}</HeaderTitle>
                </Header>
                <SubTitle>{themes.STRINGS.SIGNIN_SUBTITLE}</SubTitle>
                <Text>{themes.STRINGS.SIGNIN_TEXT}</Text>
                <Form
                placeholder={'Por favor insira seu email'}
                label={'Email'}
                iconName={'alternate-email'}
                marginTop={'48px'}
                error={errors.email}
                onChangeText={(text) => {
                    handleChangeText(text, 'email')
                    console.log("O Email: " + text);
                }} />
                
                <PasswordForm
                placeholder={'Por favor insira sua senha'}
                label={'Senha'}
                startIconName={'key'}
                marginTop={'40px'}
                error={errors.password}
                onChangeText={(text) => handleChangeText(text, 'password')} />


                <ToogleSwitch/>

                <CustomButton variant={false} marginTop={80} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_ACCESS} onPress={validate}/>
                <CustomButton variant={true} marginTop={24} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_FORGET_PASSWORD}/>
            </ScrollView>
        </LayoutScreen>
    );
}