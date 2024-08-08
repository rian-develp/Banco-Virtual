import { View, StyleSheet} from "react-native";
import {Card} from '../components/Card'
import {Dropdown} from '../components/Dropdown'
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const InsertCard = () => {

    const [cardName, setCardName] = useState('');
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <MaterialIcons name="arrow-back" size={24} color="white" style={{paddingHorizontal: 16, paddingBottom: 16}}/>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>Insert Card</Text>
            </View>

            <Card cardName={cardName} validityCard={"12/2024"} customerName={"Gerôncio Vieira"}/>
            <Dropdown setCardName={setCardName}/>     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    header: {
        flexDirection:'row',
        width: '100%',
        height: '14%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundColor: 'green'
    }
});