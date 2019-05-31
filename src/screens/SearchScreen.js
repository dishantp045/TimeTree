import React, {Component} from 'react';
import {Image, View, Button, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff0f5'
    },
    image: {
        alignSelf: 'center',
        width: 350,
        height: 450,
        flex: 1,
    },
    words: {
        textAlign: 'center',
        color: 'red',
        margin: 10,
    },
});

class SearchScreen extends Component<Props>{
    render(){
        return (
            <View style = {styles.container}>
                <Image 
                    style = {styles.image}
                    resizeMode = 'center'
                    source = {require('../assets/images/TimeTreeSearch.png')}
                />
            </View>
        );
    }
}

export default SearchScreen;