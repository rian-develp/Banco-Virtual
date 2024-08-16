import { useEffect, useState} from "react";
import { StyleSheet, Text, View, Image} from "react-native";

export const Card = ({validityCard, customerName, cardName}) => {
    const [nameCard, setNameCard] = useState('');
    const [cardColor, setCardColor] = useState('#e2e2e2');
    const[iconPath, setIconPath] = useState('...');
    const EXAMPLE = "Nome:\n"+customerName;
    const VALIDITY = "Validade\n"+validityCard;

    function handleCards(){
        if(cardName === 'MasterCard'){
            setIconPath("https://play-lh.googleusercontent.com/jMECkIn97zzMi1IoWlb9SYjtbYolSPmgdLmylwIwo3pbhQ_omkRMzM0bS-PnN461hg");
            setCardColor("#212121");
        } else if(cardName === 'NuBank') {
            setIconPath("https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2-1.png");
            setCardColor("#7a44c9");
        } else if(cardName === 'PicPay'){
            setIconPath("https://upload.wikimedia.org/wikipedia/commons/5/5e/PicPay_Logogrande.png");
            setCardColor("#52d75f");
        } else if(cardName === 'HiperCard'){
            setIconPath("https://logodownload.org/wp-content/uploads/2015/03/hipercard-logo-0.png");
            setCardColor("#BA1319");
        } else if(cardName === 'Itaú'){
            setIconPath("https://www.itau.com.br/media/dam/m/3728062fc365b51b/original/Section-4_Image-with-text.png");
            setCardColor("#FF8C00");
        }  
    }

    useEffect(()=>{
            setNameCard(cardName);
            handleCards();
    },[cardName]);
    return(
        <View style={[styles.containerCard, {backgroundColor: cardColor}]}>
            <View style={styles.secondContainer}>
                <Text style={[styles.cardName, {color: 'white'}]}>{nameCard}</Text>
                <Image style={styles.logo} source={{uri: iconPath}}/> 
            </View>

            <View style={styles.numberCardContainer}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 16, color: 'white'}}>XXXX XXXX XXXX XXXX</Text>
            </View>

            <View style={styles.lastContainer}>
                <Text style={[styles.cardName, {color: 'white'}]}>{EXAMPLE}</Text>
                <Text style={[styles.cardName, {color: 'white', marginEnd: 16}]}>{VALIDITY}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        width: 380,
        height: 240,
        flexDirection: 'column',
        borderRadius: 16,
        marginStart: 32,
        marginEnd: 42,
        marginTop: 32
    },

    secondContainer: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'space-between'
    },

    cardName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginStart: 16,
        marginBottom: 8
    },

    logo: {
        marginEnd: 16,
        width: 72,
        height: 48,
        padding: 8
    },

    numberCardContainer: {
        width: '100%',
        height: '42%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    lastContainer: {
        width: '100%',
        height: '33%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    }
});