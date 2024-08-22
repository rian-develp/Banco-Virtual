import styled from "styled-components/native";
import themes from '../../themes/themes'
import { Dimensions } from "react-native";

const {width} = Dimensions.get('window');

export const LayoutScreen = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    background-color: ${themes.COLORS.BACKGROUND_LIGHT};
`;

export const Container = styled.View`
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: flex-start;
`;

export const Header = styled.View`
    width: 100%;
    height: ${width / 3.4};
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