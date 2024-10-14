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
import themes from "../../themes/themes";


export const SignUp = () => {
    const navigation = useNavigation();
    const baseUrl = themes.STRINGS.BASE_URL;
    const text = themes.STRINGS.TEXT
    let isValidEmail, isValidBirthdate, isValidNumberPhone = false;

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

        return {
            code: response.status,
            body: res
        };
    }

    function validate() {
        isValidEmail = validEmail(data.email);
        isValidBirthdate = validDate(data.birthdate);
        isValidNumberPhone = validNumberPhone(data.numberPhone);

        isValidEmail ? handleError(null, 'email') : handleError(themes.ERRORS.INVALID_EMAIL, 'email');
        isValidBirthdate ? handleError(null, 'birthdate') : handleError(themes.ERRORS.INVALID_DATE, 'birthdate');
        isValidNumberPhone ? handleError(null, 'numberPhone') : handleError(themes.ERRORS.INVALID_NUMBER_PHONE, 'numberPhone');
        
        if(data.name == ''){
            handleError("Por favor insira seu nome", 'name');
        } else {
            handleError(null, 'name');
        }

        if (data.password == '') {
            handleError(themes.ERRORS.PASSWORD_IS_BLANK, 'password')
        } else if (data.password.length < 6) {
            handleError(themes.ERRORS.WEAK_PASSWORD, 'password');
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
                    handleError(themes.ERRORS.INVALID_EMAIL, 'email');
                    handleError(themes.ERRORS.INVALID_PASSWORD, 'password');
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
                contentContainerStyle={{ paddingBottom: themes.DIMENS.PADDING_BOTTOM_64PX }}>

                <Header>
                    <MaterialIcons
                        color={'black'}
                        size={themes.DIMENS.ICON_SIZE_32PX}
                        name="lock" />
                    <HeaderTitle>{themes.STRINGS.SIGNUP_TITLE}</HeaderTitle>
                </Header>

                <SubTitle>{themes.STRINGS.SUBTITLE}</SubTitle>
                <Text>{text}</Text>
                <SubTitle>{themes.STRINGS.SIGNUP_SUBTITLE1}</SubTitle>
                <Form
                    label={themes.STRINGS.LABEL_NAME}
                    placeholder={themes.STRINGS.PLACEHOLDER_NAME}
                    autoCapitalize={'none'}
                    iconName={'person'}
                    marginTop={`${themes.DIMENS.MARGIN_TOP_56PX}px`}
                    onChangeText={(text) => {
                        handleChangeText(text, 'name')
                        handleError(null, 'name');
                    }}
                    error={errors.name}/>

                <Form
                    label={themes.STRINGS.LABEL_BIRTHDATE}
                    placeholder={themes.STRINGS.PLACEHOLDER_BIRTHDATE}
                    typeMask={"##/##/####"}
                    autoCapitalize={'none'}
                    iconName={'calendar-month'}
                    marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                    onChangeText={(text) => {
                        handleChangeText(text, 'birthdate')
                        handleError(null, 'birthdate');
                    }}
                    error={errors.birthdate} />

                <Form
                    label={themes.STRINGS.LABEL_NUMBER_PHONE}
                    placeholder={themes.STRINGS.PLACEHOLDER_NUMBER_PHONE}
                    typeMask={"(##) #####-####"}
                    autoCapitalize={'none'}
                    iconName={'smartphone'}
                    marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                    onChangeText={(text) => {
                        handleChangeText(text, 'numberPhone');
                        handleError(null, 'numberPhone');
                    }}
                    error={errors.numberPhone} />

                <Form
                    label={themes.STRINGS.LABEL_EMAIL}
                    placeholder={themes.STRINGS.PLACEHOLDER_EMAIL}
                    autoCapitalize={'none'}
                    iconName={'mail'}
                    marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                    onChangeText={(text) => {
                        handleChangeText(text, 'email')
                        handleError(null, 'email');
                    }}
                    error={errors.email} />

                <SubTitle
                    subtitlePaddingTop={`${themes.DIMENS.PADDING_TOP_12PX}px`}
                    subtitlePaddingBottom={`${themes.DIMENS.PADDING_BOTTOM_12PX}px`}>
                    {themes.STRINGS.SIGNUP_SUBTITLE2}
                </SubTitle>

                <PasswordForm
                    label={themes.STRINGS.LABEL_PASSWORD}
                    placeholder={themes.STRINGS.PLACEHOLDER_PASSWORD}
                    marginTop={`${themes.DIMENS.MARGIN_TOP_24PX}px`}
                    startIconName={'key'}
                    onChangeText={(text) => {
                        handleChangeText(text, 'password')
                        handleError(null, 'password');
                    }}
                    error={errors.password}/>

                <PasswordForm
                    label={themes.STRINGS.LABEL_CONFIRM_PASSWORD}
                    placeholder={themes.STRINGS.PLACEHOLDER_CONFIRM_PASSWORD}
                    marginTop={`${themes.DIMENS.MARGIN_TOP40PX}px`}
                    startIconName={'key'}
                    onChangeText={(text) => {
                        handleConfirmPassword(text);
                        handleError(null, 'confirmPassword')
                    }}
                    error={errors.confirmPassword}/>

                <CustomButton
                    disable={false}
                    marginTop={themes.DIMENS.MARGIN_TOP_56PX}
                    text={themes.STRINGS.SIGNUP_TEXT_BUTTON_ACCESS}
                    onPress={validate} />

            </ScrollView>
        </LayoutScreen>
    );
}