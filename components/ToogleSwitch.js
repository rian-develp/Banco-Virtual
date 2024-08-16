import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text} from "react-native";

export const ToogleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.outterSwitch, 
            isOn 
            ? {justifyContent: "flex-end", backgroundColor: 'green'} 
            : {justifyContent: "flex-start", backgroundColor: 'grey'}]} 
            onPress={() => {
                setIsOn(!isOn);
            }}>
                <View style={[styles.innerSwitch, {backgroundColor: isOn ? 'green' : 'white'}]}/>
            </TouchableOpacity>
            <Text style={{padding: 8, fontSize: 16, fontWeight: 'bold'}}>Mantenha-me Conectado</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 40,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 32,
        marginStart: 64,
        flexDirection:'row',
    },

    outterSwitch: {
        width: 80,
        height: 32,
        backgroundColor: 'grey',
        borderRadius: 16,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 2,
        opacity: 0.7
    },
    
    innerSwitch: {
        width: 24,
        height: 24,
        borderRadius: 16,
        elevation: 8,
        shadowOffset: {width:0,height:0},
        shadowOpacity: 0.15,
        shadowRadius: 2,
    },
    
});