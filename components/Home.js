import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Home extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeTitle}>Welcome to Soccer Tournament!</Text>
                <Text style={styles.welcomeBody}>To get started, Please Click Next Button</Text>
                <TouchableOpacity style={styles.welcomeButton} onPress={() => navigate('TotalPlayers')}>
                    <Text style={styles.welcomeButtonText}>START</Text>
                </TouchableOpacity>
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
    welcomeTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    welcomeBody: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    welcomeButton: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 100,
    },
    welcomeButtonText: {
        color: '#034694',
    },
});
