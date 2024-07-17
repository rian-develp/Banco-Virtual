import {TextInput, StyleSheet, Animated} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState, useRef } from "react";
import { ContainerForm } from "../styled_components/styled";

export const PasswordForm = ({placeholder, startIconName, onChangeText, error, marginTop}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

    const labelStyle = {
        left: 36,
        top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [16, -12]
        }),
        fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 16]
        }),
        color: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: ['#000', 'black']
        })
    }

    const handleFocus = () => {
        setIsFocused(true);
        animatedLabel(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        if(!text){
            animatedLabel(0);
        }
    };

    const handleTextChange = (text => {
        setText(text);
        if (onChangeText){ onChangeText(text) }

        if(text) {
            animatedLabel(1);
        } else {
            animatedLabel(isFocused ? 1 : 0);
        }
    })

    const animatedLabel = (toValue) => {
        Animated.timing(labelPosition, {
            toValue: toValue,
            duration: 200,
            useNativeDriver: false
        }).start();
    };

    return (
        <ContainerForm containerFormMarginTop={marginTop} containerFormBorderColor={error ? 'red' : 'black'}>
            <MaterialIcons color={error ? 'red' : 'black'} size={24} name={startIconName}/>
            <Animated.Text style={[styles.label, labelStyle]}>Password</Animated.Text>
            <TextInput placeholder={isFocused ? placeholder : ''} style={{flex: 1, fontSize: 18, padding: 8}}
            autoCorrect={false}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            secureTextEntry={hidePassword}
            value={text}
            />
            <MaterialIcons color={'black'} size={24} name={hidePassword ? "visibility" : "visibility-off"} style={{padding: 8}} onPress={() => {
                setHidePassword(!hidePassword)
            }}/>
            {error && <Text style={styles.errorLabel}>{error}</Text>}
        </ContainerForm>
    );
}

const styles = StyleSheet.create({
    label: {
        color: 'black', 
        backgroundColor: '#ffffff', 
        position: 'absolute',
    },

    errorLabel: {
        marginTop: 8,
        fontSize: 16,
        color: 'red'
    }
});