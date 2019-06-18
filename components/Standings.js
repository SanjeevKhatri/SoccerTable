import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';

export default class Standings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Players', 'Played', 'Won', 'Drawn', 'Lost', 'GF', 'GA', 'GD', 'Points'],
            tableData: [
                ['Sanjeev', '5', '0', '5', '15', '13', '2', '15'],
                ['Prem', '5', '0', '5', '15', '13', '2', '15'],
                ['Manoj', '5', '0', '5', '15', '13', '2', '15'],
                ['Xitiz', '5', '0', '5', '15', '13', '2', '15'],
                ['Shyam', '5', '0', '5', '15', '13', '2', '15'],
            ]
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table style={styles.table}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={state.tableData} textStyle={styles.text}/>
                </Table>
                <TouchableOpacity style={styles.welcomeButton} onPress={() => navigate('Standings')}>
                    <Text style={styles.welcomeButtonText}>Start Match</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#034694', },
    table: { borderWidth: 2, borderColor: '#c8e1ff', backgroundColor: '#ffffff', },
    text: { textAlign: 'center', color: '#034694', },
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