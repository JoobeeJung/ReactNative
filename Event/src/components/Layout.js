// Layout.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
};

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style={styles.text}>Contents</Text>
        </View>
    );    
};
export const Footer = () => {
    return (
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyConten: 'center',
        height: 80,   
    },

    header: {
        backgroundColor: '#ABCDEF',
    },
    contents: {
        flex:1,
        backgroundColor: '#00FF00',
        height:400,
    },
    footer: {
        backgroundColor: '#0000FF',
    },
    text : {
        fontSize:25,
    },
});
