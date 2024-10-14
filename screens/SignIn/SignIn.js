import { Alert, ScrollView } from 'react-native'
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
    
    const baseUrl = themes.STRINGS.BASE_URL;
    const navigation = useNavigation();
    let isValidEmail = false;
    
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validate = () => {
        
        isValidEmail = validEmail(data.email);

        if(isValidEmail == false) {
            handleError(themes.ERRORS.INVALID_EMAIL, 'email');
        } else {handleError(null, 'email');}

        if(data.password.length < 5 || data.password == ''){
            handleError(themes.ERRORS.INVALID_PASSWORD, 'password');
            return;
        } else {handleError(null, 'password');}~
        
        DoRequest("POST", "signin", data).then((success) => success.code)
        .then((success) => {
            if(success === 200) {
                navigation.navigate("Home");
            } else if(success != 200){
                Alert.alert(themes.ERRORS.INVALID_EMAIL_OR_PASSWORD);
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
    
        var res = await response.json();
        
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
                    <MaterialIcons name='lock' size={32} color={themes.COLORS.BACKGROUND_DARK}/>
                    <HeaderTitle>{themes.STRINGS.SIGNIN_TITLE}</HeaderTitle>
                </Header>
                <SubTitle>{themes.STRINGS_SUBTITLE}</SubTitle>
                <Text>{themes.STRINGS.SIGNIN_TEXT}</Text>
                <Form
                placeholder={themes.STRINGS.PLACEHOLDER_EMAIL}
                label={'Email'}
                iconName={'alternate-email'}
                marginTop={`${themes.DIMENS.MARGIN_TOP48PX}px`}
                error={errors.email}
                onChangeText={(text) => {
                    handleChangeText(text, 'email')
                    handleError(null, 'email');
                }} />
                
                <PasswordForm
                placeholder={themes.STRINGS.PLACEHOLDER_PASSWORD}
                label={'Senha'}
                startIconName={'key'}
                marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                error={errors.password}
                onChangeText={(text) => {
                    handleChangeText(text, 'password');
                    handleError(null, 'password');
                }} />


                <ToogleSwitch/>

                <CustomButton 
                variant={false} 
                marginTop={themes.DIMENS.MARGIN_TOP_80PX} 
                text={themes.STRINGS.SIGNIN_TEXT_BUTTON_ACCESS} 
                onPress={validate}/>

                <CustomButton 
                variant={true} 
                marginTop={themes.DIMENS.MARGIN_TOP_24PX} 
                text={themes.STRINGS.SIGNIN_TEXT_BUTTON_FORGET_PASSWORD}/>

            </ScrollView>
        </LayoutScreen>
    );
}