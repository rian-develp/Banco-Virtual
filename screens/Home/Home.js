import { TouchableOpacity } from 'react-native'
import { LayoutScreen, Header, HeaderTitle, ContainerFab, ContainerFlatList } from './styled';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { CustomFlatList } from '../../components/CustomFlatList';

export const Home = () => {

    const navigation = useNavigation();
    
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
                <CustomFlatList/>
            </ContainerFlatList>

            <ContainerFab>
                <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate("InsertCard") }}>
                    <MaterialIcons size={56} color={'white'} name='add' />
                </TouchableOpacity>
            </ContainerFab>
        </LayoutScreen>
    );
}