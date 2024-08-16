import styled from "styled-components/native";

export const LayoutScreen = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.View`
    width: 100%;
    height: 70%;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 14%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    background-color: green;
`;

export const HeaderTitle = styled.Text`
    color: white; 
    font-size: 24px; 
    font-weight: bold; 
    margin-bottom: 16px;
`;