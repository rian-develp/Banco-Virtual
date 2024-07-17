import {View, StyleSheet, Text} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Form } from '../components/Form';
import { PasswordForm } from '../components/PasswordForm';
import themes from '../themes/themes';
import { CustomButton } from '../components/CustomButton';
import { ToogleSwitch } from '../components/ToogleSwitch';
import { useState } from 'react';

export const SignIn = () => {

    const [inputs, setInputs] = useState({
        email: null,
        password: null
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null
    });

    function validate(){
        let booleanValidate = false; 

        if(inputs.email == null || inputs.email == ''){
            handleError('Email inválido', 'email');
        }

        if(inputs.password == null || inputs.password == ''){
            handleError('Senha inválida', 'password');
        }

        if({...inputs} == null || {...inputs} == ''){
            booleanValidate = false;
            
        } else {
            booleanValidate = true;            
        }

        if(booleanValidate == false){
            return;
        }
    }

    function handleChangeText(text, input){
        setInputs((prevState) => ({...prevState, [input]: text}));
    }

    function handleError(errorMessage, input){
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
    }

    return (
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <MaterialIcons name='lock' size={32} color={'#000000'}/>
                <Text style={styles.title}>{themes.STRINGS.SIGNIN_TITLE}</Text>
            </View>
            <Text style={{color: 'black', fontSize: 24, margin: 24}}>{themes.STRINGS.SIGNIN_SUBTITLE}</Text>
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
            marginTop={'24px'}
            error={errors.password}
            />

            <ToogleSwitch/>

            <CustomButton variant={false} marginTop={48} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_ACCESS} onPress={validate}/>
            <CustomButton variant={true} marginTop={24} text={themes.STRINGS.SIGNIN_TEXT_BUTTON_FORGET_PASSWORD}/>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'column',
        marginTop: 32
    },

    subHeader: {
        width: '100%',
        height: '6%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
    }
});