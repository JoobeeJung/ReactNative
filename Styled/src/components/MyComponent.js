import styled from "styled-components/native";

const MyComponent = styled.Text`
    color: #ffffff;
    font-size: 14pt;
`;

const commonText = css`
    color: #ffffff;
    font-size: 14pt;
`;

const BoldText = styled.Text`
    ${commonText}
    font-weight:600;
`;

const ErrorText = styled(BoldText)`
    color: red;
`;
