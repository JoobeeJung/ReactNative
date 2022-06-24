import React, {useState} from "react";
import { View, Text } from 'react-native';
import MyButton from './MyButton';

const Counter = () => {

    const [count, setCount] = useState(0); //setCount는 setter 의 이름이다
    const [double, setDouble] = useState(0);

    return (
        <View style={{
            alignContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ fontSize:30, }}>{count}</Text>
            <Text style={{ fontSize:30, }}>{double}</Text>

            <MyButton title="+" onPress={() => { 
                                                setCount(count + 1);
                                                setDouble(double +2);}} />
            <MyButton title="-" onPress={() => { 
                                                setCount(count - 1);
                                                setDouble(double-2);
            }} />
        </View>
    );
};

export default Counter;