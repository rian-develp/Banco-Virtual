import { FlatList, TouchableOpacity } from 'react-native'
import { LayoutScreen, Header, HeaderTitle, ContainerFab, ContainerFlatList } from './styled';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Card } from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {

    const navigation = useNavigation();
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
        <LayoutScreen>
            <Header>
                <MaterialIcons
                    style={{ padding: 16, paddingEnd: 24 }}
                    color={'white'}
                    name={"arrow-back"}
                    size={26}
                    onPress={() => { navigation.goBack() }} />

                <HeaderTitle>Home</HeaderTitle>
            </Header>

            <ContainerFlatList>
                <FlatList
                    style={{ width: '100%', height: '100%' }}
                    contentContainerStyle={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 56 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={data}
                    renderItem={({ item }) => <Card cardName={item.cardName} validityCard={item.validity}
                        colorCardName={item.colorNameCard} color={item.backgroundColor} customerName={item.customerName} />}
                />
            </ContainerFlatList>

            <ContainerFab>
                <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate("InsertCard") }}>
                    <MaterialIcons size={56} color={'white'} name='add' />
                </TouchableOpacity>
            </ContainerFab>
        </LayoutScreen>
    );
}