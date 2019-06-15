import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Name extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Enter How Many Players</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#034694',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 25,
    },
});
