import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Form } from "../components/Form";
import { useState } from "react";
import {CustomButton} from '../components/CustomButton'
import { PasswordForm } from "../components/PasswordForm";

export const SignUp = () => {
    const text = 'Com a sua carteira de cartões de crédito você pode fazer suas transações em qualquer lugar'
    const [data, setData] = useState({
        name: '',
        birthdate: '',
        numberPhone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        birthdate: '',
        numberPhone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

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

    function validate(){
        if(data.name == null || data.name == ''){
            handleError('nome inválido', 'name');
        }
        if(data.birthdate == null || data.birthdate == ''){
            handleError('data inválida', 'birthdate');
        }
        if(data.numberPhone.length != 11 || data.numberPhone == ''){
            handleError('número inválido', 'numberPhone');
        }
        if(data.email == null || data.email == ''){
            handleError('nome inválido', 'email');
        }

        DoRequest("POST", "signup", data).then((success) => {
            console.log(success);
        }).catch((error)=> {
            console.log(error);
        })

    }

    function handleError(errorMessage, input){
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
    }

    function handleChangeText(text, input){
        setData((prevState) => ({...prevState, [input]: text}));
    }
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 64}} style={{width: '100%'}}>
                <View style={styles.header}>
                    <MaterialIcons color={'black'} size={32} name="lock"/>
                    <Text style={styles.headerTitle}>CADASTRO</Text>
                </View>

                <Text style={styles.subTitle}>Seja bem vindo!</Text>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.subTitle}>Dados pessoais</Text>
                <Form
                label={'Nome e sobrenome'}
                placeholder={'Por favor insira seu nome e sobrenome'}
                autoCapitalize={'none'}
                iconName={'person'}
                marginTop={'56px'}
                onChangeText={(text) => handleChangeText(text, 'name')}
                error={errors.name}
                marginDefinied={'42px'}
                />
                
                <Form
                label={'Data de nascimento'}
                placeholder={'Por favor insira sua data de nascimento'}
                autoCapitalize={'none'}
                iconName={'calendar-month'}
                marginTop={'48px'}
                onChangeText={(text) => handleChangeText(text, 'birthdate')}
                error={errors.birthdate}/>
                
                <Form
                label={'Telefone'}
                placeholder={'Por favor insira seu número'}
                autoCapitalize={'none'}
                iconName={'smartphone'}
                marginTop={'48px'}
                onChangeText={(text) => handleChangeText(text, 'numberPhone')}
                error={errors.numberPhone}/>
                
                <Form
                label={'Email'}
                placeholder={'Por favor insira seu email'}
                autoCapitalize={'none'}
                iconName={'mail'}
                marginTop={'48px'}
                onChangeText={(text) => handleChangeText(text, 'email')}
                error={errors.email}/>

                <Text style={{fontSize: 24, marginTop: 56, marginStart: 16, fontWeight: 'bold'}}>Dados de acesso</Text> 

                <PasswordForm
                marginTop={'24px'}
                startIconName={'key'}
                label={'Senha'}
                placeholder={'por favor insira sua senha'}/>
                
                <PasswordForm
                marginTop={'24px'}
                startIconName={'key'}
                label={'Confirmar senha'}
                placeholder={'por favor confirme a senha'}/>

                <CustomButton 
                disable={false}
                marginTop={48}
                text={'Validar'}
                onPress={validate}
                />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 16
    },

    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        padding: 8
    },
    
    subTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginStart: 16,
        marginTop: 16
    },

    text: {
        fontSize: 16,
        color: 'black',
        marginStart: 16,
        marginTop: 8,
        paddingBottom: 24
    }
});

