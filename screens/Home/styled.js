import styled from "styled-components/native";
import themes from "../../themes/themes";

export const LayoutScreen = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: ${themes.COLORS.BACKGROUND_LIGHT};
`;

export const ContainerFlatList = styled.View`
    width: 100%;
    height: 56%;
    align-items: center;
    justify-content: center;
`;

export const ContainerFab = styled.View`
    width: 64px; 
    height: 64px; 
    background-color: green; 
    align-self: flex-end;
    border-radius: 16px; 
    margin-right: 24px; 
    margin-top: 160px;
`;

export const Header = styled.View`
    width: 100%;
    height: 12%;
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
