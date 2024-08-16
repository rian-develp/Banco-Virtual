import {TextInput, StyleSheet, Animated, Text} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState, useRef } from "react";
import { Container, ContainerForm } from "../styledComponents/styled";

export const PasswordForm = ({placeholder, startIconName, onChangeText, error, marginTop, label}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

    const labelStyle = {
        left: 36,
        top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [10, -20]
        }),
        fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 18]
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
        <Container containerMarginTop={marginTop} containerBorderColor={error ? 'red' : 'black'}>
            <ContainerForm>
                <MaterialIcons color={error ? 'red' : 'black'} size={24} name={startIconName} style={{width:'10%', paddingVertical: 0}}/>
                <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
                <TextInput placeholder={isFocused ? placeholder : ''} 
                style={{width: '95%', fontSize: 18}}
                autoCorrect={false}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleTextChange}
                secureTextEntry={hidePassword}
                value={text}
                />
                <MaterialIcons color={error ? 'red' : 'black'} size={24} name={hidePassword ? "visibility" : "visibility-off"} 
                style={{width:'10%'}}
                onPress={() => {
                    setHidePassword(!hidePassword)
                }}/>
            </ContainerForm>
                {error && <Text style={styles.errorLabel}>{error}</Text>}
        </Container>
    );
}

const styles = StyleSheet.create({
    label: {
        color: 'black', 
        backgroundColor: '#f1f1f1', 
        position: 'absolute',
        zIndex: -1,
        paddingHorizontal: 8
    },

    errorLabel: {
        marginTop: 16,
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    }
});