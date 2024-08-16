import { useRef, useState } from "react";
import { TextInput, Text, Animated, View, StyleSheet } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Container, ContainerForm } from "../styledComponents/styled";
import { maskCustom } from '../utils/maskCustom'

export const Form = ({ onChangeText = () => { }, keyboardType, error, iconName, placeHolder, label, typeMask, marginTop }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

    const stylesLabel = {
        left: 36,
        top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [10, -20]
        }),
        fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 18]
        })
    }
    return (
        <Container
            containerMarginTop={marginTop}
            containerBorderColor={error ? 'red' : 'black'}>
            <ContainerForm>
                <View style={styles.secondContainer}>
                    <MaterialIcons
                        color={error ? 'red' : 'black'}
                        size={24} name={iconName} />
                </View>
                <Animated.Text style={[styles.label, stylesLabel]}>{label}</Animated.Text>
                <TextInput style={styles.editText}
                    onChangeText={handleTextChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    placeholder={isFocused ? placeHolder : null}
                    value={text}
                />
            </ContainerForm>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </Container>
    );

    function handleFocus() {
        setIsFocused(true);
        animatedLabel(1);
    }

    function handleBlur() {
        setIsFocused(false);
        if (!text) {
            animatedLabel(0);
        }
    }

    function animatedLabel(toValue) {
        Animated.timing(labelPosition, {
            toValue: toValue,
            duration: 200,
            useNativeDriver: false
        }).start()
    }

    function handleTextChange(text) {
        if (typeMask) {
            const textMasked = maskCustom(typeMask, text);
            setText(textMasked);
            if (onChangeText) {
                onChangeText(textMasked);
            }

            if (text == '' || text) {
                animatedLabel(1);
            } else {
                animatedLabel(isFocused ? 1 : 0);
            }
            return;
        }


        setText(text);
        if (onChangeText) {
            onChangeText(text);
        }

        if (text == '' || text) {
            animatedLabel(1);
        } else {
            animatedLabel(isFocused ? 1 : 0);
        }
    }

}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 64,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        marginStart: 16
    },

    secondContainer: {
        height: '100%',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    thirdContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    errorText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 8
    },

    label: {
        zIndex: -2,
        position: 'absolute',
        color: 'black',
        paddingHorizontal: 8,
        backgroundColor: '#f1f1f1'
    },

    editText: {
        fontSize: 18,
        width: '100%',
        height: '100%'
    }
});