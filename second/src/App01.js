import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#ffff00',
        justifyContent: 'center',
        alignItems:'center',
    },
    text : {
        fontSize: 30,
    },
    nametext:{
        fontSize: 50,
    }
});

const myStyle = StyleSheet.create({
    company : {
        textSize: 15,
     },
    email : {
        textSize: 8,
    },
});

const App = () => {

    let name = "김국민"; 
    // const name = "김국민"; 

    return (
        <View style={styles.container}>
            <Text>이름 : {name}</Text>
            <Text style={styles.text}>이름 : 변수</Text>
            <Text>이름 : 홍길동</Text>
            <Text style={styles.nametext}>이름 : 홍길동</Text>
            <Text>이름 : 홍길동</Text>
            <Text style={myStyle.company}>회사명 : 국민은행</Text>
            <Text style={myStyle.email}>이메일 : user@kbfg.com</Text>
        
        </View>
    );
};

/*
//Fragment는 생략이 가능하다. <Fragment> = <> , </Fragment> = </>
const App = () => {
    return (
        <>
            <Text>기본형태</Text>
            <Text>Second</Text>
        </>
    );
};
*/

/*
const App = () => {
    return (
        <Fragment>
            <Text>기본형태</Text>
            <Text>Second</Text>
        </Fragment>
    );
};
*/

/*
//View : Div

const App = () => {
    return (
        <View>
            <Text>기본형태</Text>
            <Text>Second</Text>
        </View>
    );
};
*/

export default App;