import React, {Component} from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text, TextInput, ImageBackground, Button, Alert} from 'react-native';
import {SearchBar} from 'react-native-elements';
import StartScreen from './StartScreen'
const styles = StyleSheet.create ({
    container: { // just for main screen if need be
        flex: 1,
        backgroundColor: '#fff0f5'
    },
    image: { // for time tree logo 
        alignSelf: 'center',
        width: 350,
        height: 450,
        flex: 1,
    },
    words: { // for any text
        textAlign: 'center',
        color: 'red',
        margin: 100,
        fontSize: 100,
    },
    small: { // random too scared to get rid of
        alignItems: 'baseline',
        flex: 3,
    },
    info: { // for info button
        height: 50,
        width: 50,
        flex: 1,
        position: 'absolute',
        left: 300,
        bottom: 15,
    },
    panel: { // for panel that input stuff will lay on
        height: 200,
        width: 400,
        backgroundColor: 'rgba(4,22,86,0.5)',
        flex: 1,
        position: 'absolute',
        top: 200,
        right: 0,
    },
    boxA:{ // for taxon A
        height: 40,
        width: 200,
        backgroundColor: '#d3d3d3',
        flex: 1,
        position: 'absolute',
        top: 235,
        right: 150,
        borderRadius: 10,
    },
    boxB: { // for taxon B
        height: 40,
        width: 200,
        backgroundColor: '#d3d3d3',
        flex: 1,
        position: 'absolute',
        top: 315,
        right: 150,
        borderRadius: 10,
    },
    searchButton: {
        height: 30,
        width: 80,
        backgroundColor: '#d3d3d3',
        flex: 1,
        position: 'absolute',
        right: 25,
        top: 280,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
});

class SearchScreen extends Component<Props>{
     _onPressButton() {
       Alert.alert('You tapped the button!')
    }

    render(){
        return (
            <ImageBackground source = {require('../assets/images/TimeTreeSearch.png')} 
            imageStyle = {{resizeMode: 'contain'}}
            style = {{width: '100%', height: '100%'}}
            >
                <View style = {styles.panel}/>
                <View style = {styles.boxA}/>
                <View style = {styles.boxB}/>
                <TouchableOpacity
                style = {styles.searchButton}
                onPress= {this._onPressButton}
                >
                    <Text style = {styles.text}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.small}
                hitSlop = {{top: -750, bottom: 15, right: 50, left: -275}}
                onPress = {this._onPressButton}
                >
                    <Image 
                    style = {styles.info}
                    resizeMode = 'contain'
                    source = {require('../assets/images/info2.png')} 
                    />
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default SearchScreen;