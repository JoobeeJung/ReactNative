import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#88ff00',
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

    let name = "KB"; 
    // const name = "김국민"; 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {(()=>{
                if(name ==='KB') return 'COMPANY : KBSTAR';
                else if(name ==='kb') return 'company : kbstar';
                else return '회사명 : 국민은행';
            })()}</Text>

            <Text style={styles.text}>
                My Company is {name ==='KB' ? 'name KB' : 'Facebook'}
            </Text>
        
            <Text>논리연산자 AND :</Text>
            
            {name === "KB" && (
                <Text style={styles.text}> AND 연산 테스트</Text>
            )}

            {name !== "KB" && (
                <Text style={styles.text}> AND 연산 테스트</Text>
            )}

            <Text>논리연산자 OR :</Text>
            
            {name === "KB1" || (
                <Text style={styles.text}> OR 연산 테스트</Text>
            )}
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