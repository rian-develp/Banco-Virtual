import { Container, Header, HeaderTitle, LayoutScreen } from "./styled";
import { Card } from '../../components/Card';
import { CustomButton } from '../../components/CustomButton'
import { Dropdown } from '../../components/Dropdown';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const InsertCard = () => {

    const [cardName, setCardName] = useState('');
    const navigation = useNavigation();

    return (
        <LayoutScreen>
            <Header>
                <MaterialIcons name="arrow-back" size={24} color="white" style={{ paddingHorizontal: 16, paddingBottom: 16 }}
                    onPress={() => { navigation.goBack() }} />
                <HeaderTitle>Insert Card</HeaderTitle>
            </Header>

            <Container>
                <Card cardName={cardName}
                    validityCard={"12/2024"}
                    customerName={"Gerôncio Vieira"} />

                <Dropdown setCardName={setCardName} />
            </Container>

            <CustomButton
                disable={false}
                variant={false}
                marginTop={48}
                text={"Salvar"}
                onPress={() => { navigation.goBack() }}
                marginStart={4}
            />
        </LayoutScreen>
    );
}