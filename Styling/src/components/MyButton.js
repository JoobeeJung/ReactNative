import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
    // npm install prop-types

const MyButton = props => {
    // 변수도 만들고
    // 프로그램도 하고..
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#ABCDEF',
                padding: 20,
                margin:10,
                borderRadius: 5,
            }}
            onPress={()=>  props.onPress()} // A
        >
            <Text style={{
                fontSize: 25
            }}> {props.title || props.children} </Text>
        </TouchableOpacity>
    );
};

// Default Property 지정

MyButton.defaultProps = {
    title: 'DftMyButton',
};


// Property의 데이터 타입 검사(지정)
MyButton.propTypes = {
    // title:PropTypes.number,
    
    title: PropTypes.string,
    //name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};


/*
    propTypes
        props의 데이터 타입을 명시
            데이터 오류 검사
            필수정보를 지정하지 않았을 때 프로그램의 오류 문제 해결
            협업의 문제점 해결
        사용하려면 라이브러리 설치
            prop-types
            npm install prop-types
*/

export default MyButton;