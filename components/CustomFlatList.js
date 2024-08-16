import { Dimensions, FlatList } from "react-native";
import { Card } from '../components/Card'
const width = Dimensions.get('window');
export const CustomFlatList = () => {

    const data = [
        {
            customerName: 'Gerôncio Vieira',
            validity: '12/2026',
            cardName: 'MasterCard',
            colorNameCard: 'white'
        },

        {
            customerName: 'Gerôncio Vieira',
            validity: '12/2045',
            cardName: 'PicPay',
            colorNameCard: 'white'
        },

    ];

    return (
        <FlatList
            style={{ width: '100%', height: '100%' }}
            contentContainerStyle={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 56 }}
            horizontal={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'center'}
            snapToOffSets={[...Array(data.length).map((value, index) => {
                index * ((width * 0.8) - 40) * (i-1) * 40
            })]}
            pagingEnabled={true}
            data={data}
            renderItem={({ item }) => <Card cardName={item.cardName}
                validityCard={item.validity}
                colorCardName={item.colorNameCard} 
                color={item.backgroundColor} 
                customerName={item.customerName} 
                marginHorizontal={16}/>
            }
        />
    );
}