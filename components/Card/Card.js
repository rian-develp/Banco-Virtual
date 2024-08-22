import {SafeAreaView ,View, Dimensions, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
import { useState, useRef }  from 'react';

const { width } = Dimensions.get('window');

export const Card = ({cardName, validityCard, customerName, marginHorizontal, numberCard}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const flipAnimation = useRef(new Animated.Value(0)).current;

    const frontInterpolate = flipAnimation.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });
    
    const flipToFrontStyle = {
        transform: [{rotateY: frontInterpolate}],
    };
    
    const backInterpolate = flipAnimation.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });
    
    const flipToBackStyle = {
        transform: [{rotateY: backInterpolate}],
    };
    
    const flipCard = () => {
        if(isFlipped){
            Animated.spring(flipAnimation, {
                toValue: 0,
                friction: 8,
                tension: 10,
                useNativeDriver: true
            }).start()
        } else {
            Animated.spring(flipAnimation, {
                toValue: 180,
                friction: 8,
                tension: 10,
                useNativeDriver: true
            }).start()
        }
        setIsFlipped(!isFlipped);
    }

    return (
        <SafeAreaView style={[styles.container, {
            width: (width * 0.92),
            height: (width / 1.6),
            borderRadius: 16,
            marginHorizontal: marginHorizontal || 16
        }]}>

            <TouchableWithoutFeedback onPress={flipCard}>
                <View style={{height: '100%', width: '100%'}}>
                    <Animated.View style={[styles.frontCard, flipToFrontStyle]}>
                        <FrontCard 
                        cardName={cardName} 
                        customerName={customerName}
                        validityCard={validityCard}
                        numberCard={numberCard}/>
                    </Animated.View>

                    <Animated.View style={[styles.backCard, flipToBackStyle, {position: 'absolute'}]}>
                        <BackCard cardName={cardName}/>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },

    frontCard: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backfaceVisibility: 'hidden'
    },

    backCard: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backfaceVisibility: 'hidden'
    }
});