import styled from "styled-components";

export const ContainerForm = styled.View`
    flex-direction: row;
    width: ${90}%;
    height: ${100}%;
    padding: 8px;
    align-items: center;
    justify-content: flex-start;
`;
export const Container = styled.View`
    flex-direction: column;
    width: ${90}%;
    height: 64px;
    padding: 8px;
    margin-top: ${(props) => props.containerMarginTop || 0};
    margin-left: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${(props) => props.containerBorderColor};
`;

export const ContainerFab = styled.View`
    width: 64px; 
    height: 64px; 
    background-color: green; 
    align-self: 'flex-end'; 
    border-radius: 16px;
    margin-right: 24px; 
    margin-top: 160px;
`;

export const ContainerFlatList = styled.View`
    width: ${100}%;
    height: ${56}%;
    align-items: 'center';
    justify-content: 'center';
`;

export const Header = styled.View`
    flex-direction: row;
    width: ${100}%;
    height: ${14}%;
    align-items: flex-end;
    justify-content: flex-start;
    background-color: 'green';
`;

export const SubHeader = styled.View`
    width: ${100}%;
    height: ${6}%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`;

export const LayoutScreen = styled.SafeAreaView`
    width: ${100}%;
    height: ${100}%;
    flex-direction: column;
`;

export const Title = styled.Text`
    color: black;
    font-size: 32px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin: 24px; 
    margin-top: 48px; 
`;

export const Text = styled.Text`
    color: black; 
    font-size: 16px; 
    margin-right: 24px; 
`;