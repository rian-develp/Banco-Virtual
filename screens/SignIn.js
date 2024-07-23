import {View, StyleSheet, Text, ScrollView} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Form } from '../components/Form';
import { PasswordForm } from '../components/PasswordForm';
import themes from '../themes/themes';
import { CustomButton } from '../components/CustomButton';
import { ToogleSwitch } from '../components/ToogleSwitch';
import { useState } from 'react';
import { api } from '../api/api';

export const SignIn = () => {
    const baseUrl = 'https://api-credit-card-792613245.development.catalystserverless.com/server/'
    const [data, setData] = useState({
        email: null,
        password: null
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null
    });

    function validate(){
        // if(data.email == null || data.email == ''){
        //     handleError('Email inválido', 'email');
        // }

        // if(data.password == null || data.password == ''){
        //     handleError('Senha inválida', 'password');
        // }
        
        // if({...data} != null && {...data} != ''){
        //     handleError(null, 'email');
        //     handleError(null, 'password');
        // }
        DoRequest("POST", "signin", data).then((success) => {
            console.log(success);
        }).catch((error)=> {
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

    function handleChangeText(text, data){
        setData((prevState) => ({...prevState, [data]: text}));
    }

    function handleError(errorMessage, input){
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 64}}>
                <View style={styles.subHeader}>
                    <MaterialIcons name='lock' size={32} color={'#000000'}/>
                    <Text style={styles.title}>{themes.STRINGS.SIGNIN_TITLE}</Text>
                </View>
                <Text style={{color: 'black', fontSize: 24, margin: 24, marginTop: 48}}>{themes.STRINGS.SIGNIN_SUBTITLE}</Text>
                <Text style={{color: 'black', fontSize: 16, marginStart: 24}}>{themes.STRINGS.SIGNIN_TEXT}</Text>
                <Form
                placeholder={'Por favor insira seu email'}
                label={'Email'}
                nameIcon={'alternate-email'}
                marginTop={'48px'}
                error={errors.email}
                onChangeText={(text) => handleChangeText(text, 'email')}
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

                <CustomButton variant={false} marginTop={48} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_ACCESS} onPress={validate}/>
                <CustomButton variant={true} marginTop={24} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_FORGET_PASSWORD}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'column',
        marginTop: 0
    },

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