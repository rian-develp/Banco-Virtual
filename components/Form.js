import {View, TextInput, StyleSheet, Animated} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRef, useState } from "react";
import { ContainerForm } from "../styled_components/styled";

export const Form = ({placeholder, label, onChangeText, error, nameIcon, autoCapitalize, marginTop}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;
    const labelStyle = {
        left: 36,
        top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [17, -12]
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
        <ContainerForm containerFormMarginTop={marginTop} containerFormBorderColor={error ? 'red' : 'black'}>
            <MaterialIcons color={'black'} size={16} name={nameIcon}/>
            <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
            <TextInput 
            style={{flex: 1, fontSize: 18, padding: 8}}
            placeholder={isFocused ? placeholder : ''} 
            autoCorrect={false}
            value={text}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            autoCapitalize={autoCapitalize}
            />
            {error && <Text style={styles.errorLabel}>{error}</Text>}
        </ContainerForm>
    );
}

const styles = StyleSheet.create({

    label: {
        color: 'black',
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1,
    },

    errorMessage: {
        fontSize: 16,
        color: 'red',
        padding: 16
    }
});