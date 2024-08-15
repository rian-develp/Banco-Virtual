import {StyleSheet, ScrollView} from 'react-native'
import { LayoutScreen, SubHeader, SubTitle, Title, Text} from '../styledComponents/styled';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Form } from '../components/Form';
import { PasswordForm } from '../components/PasswordForm';
import themes from '../themes/themes';
import { CustomButton } from '../components/CustomButton';
import { ToogleSwitch } from '../components/ToogleSwitch';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { validEmail } from '../utils/functions/validEmail';


export const SignIn = () => {
    const baseUrl = 'https://api-credit-card-792613245.development.catalystserverless.com/server/'
    const navigation = useNavigation();
    let isValidEmail = false;
    const [data, setData] = useState({
        email: '',
        password: 'null'
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

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
            <ScrollView contentContainerStyle={{paddingBottom: 24}}>
                <SubHeader>
                    <MaterialIcons name='lock' size={32} color={'#000000'}/>
                    <Title>{themes.STRINGS.SIGNIN_TITLE}</Title>
                </SubHeader>
                <SubTitle>{themes.STRINGS.SIGNIN_SUBTITLE}</SubTitle>
                <Text style={{color: 'black', fontSize: 16, marginStart: 24}}>{themes.STRINGS.SIGNIN_TEXT}</Text>
                <Form
                placeholder={'Por favor insira seu email'}
                label={'Email'}
                iconName={'alternate-email'}
                marginTop={'48px'}
                error={errors.email}
                onChangeText={(text) => {
                    handleChangeText(text, 'email')
                    console.log("O Email: " + text);
                }}
                />
                <PasswordForm
                placeholder={'Por favor insira sua senha'}
                label={'Senha'}
                startIconName={'key'}
                marginTop={'40px'}
                error={errors.password}
                onChangeText={(text) => handleChangeText(text, 'password')}
                />


                <ToogleSwitch/>

                <CustomButton variant={false} marginTop={80} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_ACCESS} onPress={validate}/>
                <CustomButton variant={true} marginTop={24} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_FORGET_PASSWORD}/>
            </ScrollView>
        </LayoutScreen>
    );
}

const styles = StyleSheet.create({ 
    subHeader: {
        width: '100%',
        height: '6%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24
    },

    title: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
    }
});