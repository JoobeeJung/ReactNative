import React, {useState} from "react";
import { View, Text, TextInput } from 'react-native';

const EventInput = () => {

    // const [ count, setCount ] = useState(0)
    const [text, setText ] = useState('');
    const _onChange = event => { setText( event.nativeEvent.text)};
    const _onChangeText = text => setText(text);

    return (
        <View>
            <TextInput
                style={{
                    borderWidth: 1,
                    padding : 10,
                    fontSize: 25,
                    margin:10, 
                    borderRadius: 5,                    
                }}
                placeholder='Insert Message'
                // onChange={_onChange}
                onChangeText={_onChangeText}
            />
            <Text style={{fontSize:25, }}>{text}</Text>
        </View>
    );
};

export default EventInput;