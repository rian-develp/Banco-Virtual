import styled from "styled-components/native";

export const LayoutScreen = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

export const Header = styled.View`
    width: 100%;
    height: 8%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`;

export const HeaderTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: black;
    padding: 8px;
`;

export const SubTitle = styled.Text`
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin: 24px; 
    margin-top: 48px; 
`;

export const Text = styled.Text`
    font-size: 16px;
    color: black;
    margin-left: 24px;
`;