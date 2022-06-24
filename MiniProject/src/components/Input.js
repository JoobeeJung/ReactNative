import React from 'react';
import styled from 'styled-components/native';
//import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';

import propTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({theme}) =>({
    placeholderTextColor: theme.main,
}))`
    width : ${({width}) => width - 40 }px ;
    height : 60px;
    margin: 5px 0px;
    padding: 0px 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground };
    font-size: 25px;
    color: ${({theme}) => theme.text };
`;

const Input = ({ 
                    placeholder, 
                    value, 
                    onChangeText, 
                    onSubmitEditing, 
                    onBlur,
                }) => {

    //const width = Dimensions.get('window').width;
    const width = useWindowDimensions().width;

    return (
        <StyledInput  
            width={width}  
            placeholder={placeholder} 
            maxLength={30} 
            autoCapitalize= "none" 
            autoCorrect={false}
            returnKeyType = "done"
            
            autoFocus = {true}

            keyboardAppearance="dark"
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
        />
    );
 };

 Input.propTypes = {
    value: propTypes.string.isRequired,
    placeholder: propTypes.string,
    onChangeText: propTypes.func.isRequired,
    onSubmitEditing: propTypes.func.isRequired,
    onBlur: propTypes.func.isRequired,
 };

export default Input;