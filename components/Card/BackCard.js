import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";

export const BackCard = ({ cardName }) => {
    const [cardColor, setCardColor] = useState();
    const [viewColor, setViewColor] = useState();
    function handleCards() {
        if (cardName === 'MasterCard') {
            setCardColor("#212121");
            setViewColor("white")
        } else if (cardName === 'NuBank') {
            setCardColor("#7a44c9");
            setViewColor("black");
        } else if (cardName === 'PicPay') {
            setCardColor("#00c15d");
            setViewColor("white");
        } else if (cardName === 'HiperCard') {
            setCardColor("#BA1319");
        } else if (cardName === 'Itaú') {
            setCardColor("#FF8C00");
        }
    }

    useEffect(() => {
        handleCards();
    }, [cardName]);

    return (
        <View style={[styles.containerCard,
        {
            backgroundColor: cardColor,
            width: '100%',
            height: '100%',
            borderRadius: 18
        }]}>

            <View style={[styles.viewStyle, {backgroundColor: viewColor}]}></View>
            <Image 
                style={{width: 40, height: 40, marginTop: 32}}
                source={{uri: 'https://e7.pngegg.com/pngimages/865/547/png-clipart-rectangular-brown-and-black-sim-card-illustration-chip-pin-solutions-ltd-emv-payment-card-credit-card-chip-company-text-thumbnail.png'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    viewStyle: {
        width:'100%',
        marginTop: 16,
        height: '20%'
    }
});
