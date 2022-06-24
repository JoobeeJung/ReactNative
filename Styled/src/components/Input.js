import React from "react";
import styled from "styled-components/native";

const StyledInput = styled.TextInput.attrs(props => ({
    placeholder: "Enter text...",
    placeholderTextColor: props.borderColor,
}))`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 2px;
    border-color: ${props => props.borderColor};
    font-size: 24px;
`;


// const StyledInput = styled.TextInput`
//     width: 200px;
//     height: 60px;
//     margin: 5px;
//     padding: 10px;
//     border-radius: 10px;
//     border: 2px;
//     border-color: #3499dd;
//     font-size: 24px;
// `;


const Input = props => {
    return (
        <StyledInput borderColor={props.borderColor} />
    );
};

// const Input = () => {
//     return (
//         <StyledInput placeholder="Insert Text" placeholderTextColor="#3499dd"  />

//     );
// };

export default Input;