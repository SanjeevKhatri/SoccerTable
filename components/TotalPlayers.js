import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class TotalPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Enter How Many Players' };
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Enter How Many Players: </Text>
                <TextInput style={styles.textInput} onChangeText={(text) => this.setState({text})}/>
                <TouchableOpacity style={styles.welcomeButton} onPress={() => navigate('Name')}>
                    <Text style={styles.welcomeButtonText}>Next</Text>
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
    title: {
        color: '#FFFFFF',
        fontSize: 25,
    },
    textInput: {
        height: 30,
        width: 30,
        backgroundColor: '#FFFFFF',
        color: '#034694',
        fontSize: 25,
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
