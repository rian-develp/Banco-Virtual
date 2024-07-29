import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const CustomButton = ({variant, marginTop, text, disable, onPress = () => {}}) => {
    return(
        <TouchableOpacity style={[styles.styleButton, {backgroundColor: variant ? 'white' : 'blue', 
            borderColor: variant ? 'blue' : 'white', marginTop: marginTop}]} disabled={disable} onPress={() => {
                onPress();
            }}>
            <Text style={{color: variant ? 'blue' : 'white', fontSize: 16, fontWeight: 'bold'}}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    styleButton: {
        width:'90%',
        height: 64,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginStart: 16,
    }
});