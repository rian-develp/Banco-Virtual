import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Form } from "../components/Form";
import { useState } from "react";
import {CustomButton} from '../components/CustomButton'
import { PasswordForm } from "../components/PasswordForm";

export const SignUp = () => {
    const text = 'Com a sua carteira de cartões de crédito você pode fazer suas transações em qualquer lugar'
    const [inputs, setInputs] = useState({
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

    function validate(){
        if(inputs.name == null || inputs.name == ''){
            handleError('nome inválido', 'name');
        }
        if(inputs.birthdate == null || inputs.birthdate == ''){
            handleError('data inválida', 'birthdate');
        }
        if(inputs.numberPhone.length != 11 || inputs.numberPhone == ''){
            handleError('número inválido', 'numberPhone');
        }
        if(inputs.email == null || inputs.email == ''){
            handleError('nome inválido', 'email');
        }
    }

    function handleError(errorMessage, input){
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
    }

    function handleChangeText(text, input){
        setInputs((prevState) => ({...prevState, [input]: text}));
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
                nameIcon={'person'}
                marginTop={'56px'}
                onChangeText={(text) => handleChangeText(text, 'name')}
                error={errors.name}
                />
                
                <Form
                label={'Data de nascimento'}
                placeholder={'Por favor insira sua data de nascimento'}
                autoCapitalize={'none'}
                nameIcon={'calendar-month'}
                marginTop={'48px'}
                onChangeText={(text) => handleChangeText(text, 'birthdate')}
                error={errors.birthdate}/>
                
                <Form
                label={'Telefone'}
                placeholder={'Por favor insira seu número'}
                autoCapitalize={'none'}
                nameIcon={'smartphone'}
                marginTop={'48px'}
                onChangeText={(text) => handleChangeText(text, 'numberPhone')}
                error={errors.numberPhone}/>
                
                <Form
                label={'Email'}
                placeholder={'Por favor insira seu email'}
                autoCapitalize={'none'}
                nameIcon={'mail'}
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

