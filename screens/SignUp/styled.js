import styled from "styled-components/native";
export const LayoutScreen = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    height: 8%;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const HeaderTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: black;
    padding: 8px;
`;

export const SubTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-left: 16px;
    margin-top: 16px;
    padding-top: ${props => props.subtitlePaddingTop};
    padding-bottom: ${props => props.subtitlePaddingBottom};
`;

export const Text = styled.Text`
    font-size: 16px;
    color: black;
    margin-left: 16px;
    margin-top: 8px;
    padding-bottom: 24px;
`;