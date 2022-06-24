import React from 'react';
import { Text, View, Button } from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';

const App = () => {
    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{
                fontSize: 30,
                marginBottom: 20,
            }}>
                Built-In Component : Button
            </Text> 
            <Button 
                title="MyButton" 
                onPress={()=> alert('Click')}
            />  

            <MyButton title="React" onPress={() => alert('React') } />
            <MyButton title="Native" onPress={() => { alert('Native')}} />
            <MyButton title="Title" onPress={() => alert('Title') }></MyButton>
            <MyButton onPress={() => alert('Child') }>Children</MyButton> 
            
            <Counter />   
        </View>
    );
};

export default App;

/*
    JSX : Javascript
        HTML
            style의 문제
            CSS 문법
                background-color:#FF0000;   
                
    <div style='background-color:#ff0000;' >aaa</div>

    나만의 버튼 : Custom버튼 ==> MyButton

    <img src='a.jpg' width='100' alt='test'>

    perperty, attr
        => props
*/