import { Dimensions, FlatList } from "react-native";
import { Card } from '../components/Card/Card';
import {useEffect} from 'react'
const width = Dimensions.get('window');

export const CustomFlatList = ({ customerName, cardName, validityCard, cardNumber }) => {

    console.log("customer name => " + validityCard);
    const list = [{
        cardName: cardName,
        validityCard: validityCard,
        cardNumber: cardNumber,
        customerName: customerName,
    }];
    
    useEffect(() =>{
        if(customerName && cardName && validityCard && cardNumber){
            const fake = [{
                cardName: cardName,
                validityCard: validityCard,
                cardNumber: cardNumber,
                customerName: customerName,
            }]
            list.push(fake);
        }
    },[])

    return (
        <FlatList
            style={{ width: '100%', height: '100%' }}
            contentContainerStyle={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 56 }}
            horizontal={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'center'}
            snapToOffSets={[...Array(list.length).map((value, index) => {
                index * ((width * 0.8) - 40) + (index - 1) * 40
            })]}
            pagingEnabled={true}
            extraData={list}
            data={list}
            renderItem={({ item }) => <Card cardName={item.cardName}
                validityCard={item.validityCard}
                numberCard={item.cardNumber}
                customerName={item.customerName}
                marginHorizontal={16} />
            }
        />
    );
}