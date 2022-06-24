import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${props => 
        props.title === 'React' ? props.theme.blue : props.theme.purple
    };
    border-radius: 10px;
    padding: 15px 20px;
    margin: 10px 5px;
    justify-content: center; 
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;


const Button = props => {
    return(
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;