import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Card } from '../components/Card';
import { useNavigation } from '@react-navigation/native';
export const Home = () => {

    const navigation = useNavigation();
    const data = [
        {  
          customerName: 'Marcio Borges',   
          validity: '12/2026',
          cardName: 'MasterCard',
          colorNameCard: 'white'
        },

        {
          customerName: 'Marcio Borges',   
          validity: '12/2045',
          cardName: 'PicPay',
          colorNameCard: 'white'
        },

    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons color={'white'} name={"arrow-back"} size={26} style={{padding: 16, paddingEnd: 24}} onPress={() => {navigation.goBack()}}/>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>Home</Text>
            </View>

            <View style={styles.flatlist}>
                <FlatList 
                style={{width: '100%', height: '100%'}}
                contentContainerStyle={{alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 56}}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={data}
                renderItem={({item}) => <Card cardName={item.cardName} validityCard={item.validity} 
                colorCardName={item.colorNameCard} color={item.backgroundColor} customerName={item.customerName}/>}
                />
            </View>   
             
             <View style={{backgroundColor: 'green', width: 64, height: 64, alignSelf: 'flex-end', borderRadius: 16, marginEnd: 24, marginTop: 160}}>
                <TouchableOpacity style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}} onPress={() => {navigation.navigate("InsertCard")}}>
                    <MaterialIcons size={56} color={'white'} name='add'/>
                </TouchableOpacity>
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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

    flatlist: {
        width: '100%',
        height: '56%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerFAB: {
        width: 100
    }
});