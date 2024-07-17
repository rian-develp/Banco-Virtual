import styled from "styled-components";

export const ContainerForm = styled.View`
    flex-direction: row;
    width: ${90}%;
    height: 64px;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${(props) => props.containerFormBorderColor};
    padding: 8px;
    align-items: center;
    justify-content: flex-start;
    margin-top: ${(props) => props.containerFormMarginTop || 0};
    margin-left: 24px;
`;