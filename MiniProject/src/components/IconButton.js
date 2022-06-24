import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { images } from '../Images';
import { theme } from '../theme'; 
import PropTypes from 'prop-types';

const Icon = styled.Image`
    width: 30px;
    height: 30px;
    margin: 15px;
    tint-color: ${({theme}) => theme.text};
`;

const IconButton = ({type, onPressOut, id })  => {
    console.log("IconButton, IconButton, onPressOut = ", onPressOut);

    const _onPressOut = () => {
        console.log("IconButton, _onPressOut, id = ", id);
        onPressOut(id);
    };

    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type}/>
        </TouchableOpacity>
    );
};

IconButton.defaultProps = {
    onPressOut: () => {},
};

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    id: PropTypes.string,
    onPressOut: PropTypes.func,
};

export default IconButton;
