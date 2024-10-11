import { StyleSheet, TouchableOpacity, View, Text, FlatList} from "react-native";
import AntDesign  from '@expo/vector-icons/AntDesign'
import { useState } from "react";
export const Dropdown = ({setCardName}) => {
    const [expanded, setExpanded] = useState(false);
    return(
        <View style={styles.containerDropdown}>
            <TouchableOpacity style={styles.dropdown} onPress={() => {setExpanded(!expanded)}}>
                <Text style={styles.text}>Selecione o cartão</Text>
                <AntDesign name={expanded ? 'caretup' : 'caretdown'} size={16} style={styles.icon}/>
            </TouchableOpacity>
            {expanded ? (
                <View style={styles.options}> 
                    <FlatList
                    data={[
                        { card: "MasterCard"},
                        { card: "PicPay"},
                        { card: "HiperCard"},
                        { card: "NuBank"},
                        { card: "Itaú"},
                    ]}
                    renderItem={({item}) => (
                        <TouchableOpacity activeOpacity={0.4} style={styles.optionItem}>
                            <Text style={{color: 'black', fontSize: 16, paddingStart: 16}} onPress={() => {
                                setCardName(item.card);
                            }}>{item.card}</Text>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
                    />
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    containerDropdown: {
        width: '80%',
        height: 64,
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 24,
        marginStart: 40,
    },

    options:{
        borderRadius: 16,
        position: 'absolute',
        zIndex: 2,
        top: 72,
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 16
    },

    optionItem: {
        height: 40,
        justifyContent: 'center',
    },

    dropdown: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingStart: 16,
        flexDirection: 'row',
        paddingEnd: 16
    },

    separator: {
        height: 8
    },

    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
});