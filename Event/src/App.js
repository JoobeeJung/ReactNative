import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
import { viewStyle, textStyle } from './styles';
import {Header, Contents, Footer} from './components/Layout';

import ShadowBox from './components/ShadowBox';

const styles = StyleSheet.create({
    container : {flex:1, 
        flexDirection: 'row',
        justifyContent:'center',
        alignItems : 'center'},
    item1: { flex:1, backgroundColor:'#FF0000'},
    item2: { flex:1, backgroundColor:'#FF0000'},
    item3: { flex:1, backgroundColor:'#0000FF'},
});

const App = () => {
    return (
        <View style={styles.container}>
            <EventInput>  </EventInput>
        </View>
    );
};

export default App;