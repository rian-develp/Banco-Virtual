import { TouchableOpacity, FlatList } from 'react-native'
import { Card } from '../../components/Card/Card';
import { LayoutScreen, Header, HeaderTitle, ContainerFab, ContainerFlatList } from './styled';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export const Home = () => {

    const navigation = useNavigation();

    const [data, setData] = useState([]);

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
                {
                    data ? <FlatList
                            style={{ width: '100%', height: '100%' }}
                            contentContainerStyle={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 56 }}
                            horizontal={true}
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                            snapToAlignment={'center'}
                            snapToOffSets={[...Array(data.length).map((value, index) => {
                                index * ((width * 0.8) - 40) + (index - 1) * 40
                            })]}
                            pagingEnabled={true}
                            data={data}
                            renderItem={({ item }) => <Card cardName={item.varState}
                                validityCard={item.validity}
                                numberCard={item.numberCard}
                                customerName={item.customerName}
                                marginHorizontal={16} />
                            }
                            />
                        : null}
            </ContainerFlatList>

            <ContainerFab>
                <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate("InsertCard", {setData})}}>
                    <MaterialIcons size={56} color={'white'} name='add' />
                </TouchableOpacity>
            </ContainerFab>
        </LayoutScreen>
    );
}