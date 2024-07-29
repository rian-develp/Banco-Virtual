import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const {width} = Dimensions.get('screen');
export const Card = ({color, validityCard, customerName, cardName, colorCardName}) => {
    const EXAMPLE = "Nome:\n"+customerName;
    const VALIDITY = "Validade\n"+validityCard;
    return(
        <View style={[styles.containerCard, {backgroundColor: color}]}>
            <View style={styles.secondContainer}>
                <Text style={[styles.cardName, {color: colorCardName}]}>{cardName}</Text>
                <Image source={require('../assets/favicon.png')} style={styles.logo}/>
            </View>

            <View style={styles.numberCardContainer}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 16, color: colorCardName}}>XXXX XXXX XXXX XXXX</Text>
            </View>

            <View style={styles.lastContainer}>
                <Text style={[styles.cardName, {color: colorCardName}]}>{EXAMPLE}</Text>
                <Text style={[styles.cardName, {color: colorCardName, marginEnd: 16}]}>{VALIDITY}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        width: width,
        height: width/1.6,
        flexDirection: 'column',
        borderRadius: 16,
        marginStart: 16,
        marginEnd: 72
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
        width: 48,
        height: 48,
        backgroundColor: 'pink',
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
    },
});