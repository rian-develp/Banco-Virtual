import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Card} from '../components/Card'
import {Dropdown} from '../components/Dropdown'
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

export const InsertCard = () => {

    const [cardName, setCardName] = useState('');
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{flex: 5,flexDirection: 'column', alignItems: 'center'}}>
                <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={24} color="white" style={{paddingHorizontal: 16, paddingBottom: 16}}
                onPress={() => {navigation.goBack()}}/>
                    <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>Insert Card</Text>
                </View>

                <Card cardName={cardName} validityCard={"12/2024"} customerName={"Gerôncio Vieira"}/>
                <Dropdown setCardName={setCardName}/>
            </View>
        
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} 
                onPress={() => {navigation.goBack()}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    
    header: {
        flexDirection:'row',
        width: '100%',
        height: '14%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundColor: 'green'
    },

    containerButton: {
        flex: 1, 
        flexDirection: "row", 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    button: {
        backgroundColor: 'green', 
        width: '90%', 
        height: 64, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 16
    }
});