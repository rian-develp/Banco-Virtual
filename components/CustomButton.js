import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const CustomButton = ({variant, marginTop, text, disable, onPress = () => {}, marginStart}) => {
    return(
        <TouchableOpacity style={[styles.styleButton, {backgroundColor: variant ? 'white' : 'green', 
            borderColor: variant ? 'green' : 'white', 
            marginTop: marginTop,
            marginStart: marginStart || 16
        }]} disabled={disable} onPress={() => {
                onPress();
            }}>
            <Text style={{color: variant ? 'green' : 'white', fontSize: 16, fontWeight: 'bold'}}>{text}</Text>
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
    }
});