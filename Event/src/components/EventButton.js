import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EventButton = () => {

    const _onPress = () => { alert("Press!!!")};
    const _onLongPress = () => {alert("Long Press!!!")};
    const _onPressIn = () => {console.log('_onPressIn')};
    const _onPressOut = () => {console.log(`onPressOut()`)};

    return (
        <TouchableOpacity
            style={{
                backgroundColor:"#F08855",
                padding : 15,
                margin : 10,
                borderRadius: 10,
            }}
            onPress={_onPress}
            onLongPress={_onLongPress}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}
        >
            <Text style={{fontSize: 25, color:'#FF0000'}}>Press It</Text>
        </TouchableOpacity>
    );
};

export default EventButton;