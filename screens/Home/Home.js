import { TouchableOpacity } from 'react-native'
import { LayoutScreen, Header, HeaderTitle, ContainerFab, ContainerFlatList } from './styled';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { CustomFlatList } from '../../components/CustomFlatList';

export const Home = () => {

    const route = useRoute();
    const navigation = useNavigation();
    

        const cardName = route.params?.nameCard;
        const validityCard = route.params?.validityCard;
        const cardNumber = route.params?.numberCard;
        const customerName = route.params?.customerName;

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
                    route.params ? <CustomFlatList
                        cardName={cardName}
                        cardNumber={cardNumber}
                        customerName={customerName}
                        validityCard={validityCard}
                    />
                        : null}
            </ContainerFlatList>

            <ContainerFab>
                <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate("InsertCard") }}>
                    <MaterialIcons size={56} color={'white'} name='add' />
                </TouchableOpacity>
            </ContainerFab>
        </LayoutScreen>
    );
}