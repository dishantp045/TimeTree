import React, {Component} from 'react';
import {Image, View, Button, StyleSheet, TouchableOpacity, Text, TextInput, ImageBackground} from 'react-native';
import {SearchBar} from 'react-native-elements';
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
        margin: 100,
        fontSize: 100,
    },
});

class SearchScreen extends Component<Props>{
    state = {
        search: ''
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render(){
        const {search} = this.state;
        return (
            <ImageBackground source = {require('../assets/images/TimeTreeSearch.png')} 
            imageStyle = {{resizeMode: 'contain'}}
            style = {{width: '100%', height: '100%'}}
            >
                <SearchBar
                    placeholder = "Taxon A"
                    onChangeText = {this.updateSearch}
                    value = {search}
                />
            </ImageBackground>
        );
    }
}

export default SearchScreen;