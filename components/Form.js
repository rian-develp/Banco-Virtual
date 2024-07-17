import {View, TextInput, StyleSheet, Animated, Text} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRef, useState } from "react";
import { Container, ContainerForm } from "../styled_components/styled";

export const Form = ({placeholder, label, onChangeText, error, nameIcon, autoCapitalize, marginTop}) => {
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
    };

    const animatedLabel = (toValue) => {
        Animated.timing(labelPosition, {
            toValue: toValue,
            duration: 200,
            useNativeDriver: false
        }).start();
    }

    function handleFocus(){
        setIsFocused(true);
        animatedLabel(1);
    }

    function handleBlur(){
        setIsFocused(false);
        if(!text){
            animatedLabel(0);
        }
    }

    function handleTextChange(text){
        setText(text);
        if(onChangeText){
            onChangeText(text);
        }

        if (text){
            animatedLabel(1);
        }else {
            animatedLabel(isFocused ? 1 : 0)
        }
    }
    return(
        <Container containerMarginTop={marginTop} containerBorderColor={error ? 'red' : 'black'}>
            <ContainerForm>
                <MaterialIcons color={'black'} size={24} name={nameIcon} style={{width: '10%'}}/>
                <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
                <TextInput 
                style={{height: '100%', width: '100%',fontSize: 18, padding: 0}}
                placeholder={isFocused ? placeholder : ''} 
                autoCorrect={false}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleTextChange}
                autoCapitalize={autoCapitalize}
                />
            </ContainerForm>
                {error && <Text style={styles.errorLabel}>{error}</Text>}
        </Container>
    );
}

const styles = StyleSheet.create({

    label: {
        color: 'black',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: -1,
        paddingHorizontal: 8
    },

    errorLabel: {
        fontSize: 16,
        color: 'red',
        padding: 8
    }
});