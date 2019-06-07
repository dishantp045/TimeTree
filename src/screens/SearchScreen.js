import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text, TextInput,
    ImageBackground,
    Button,
    Alert,
    Keyboard,
    Animated,
    Easing
    } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Header} from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';



const styles = StyleSheet.create ({
    container: { // just for main screen if need be
        flex: 1,
        backgroundColor: 'black'
    },
    image: { // for time tree logo 
        flex: 1,
        width: 400,
        height: 400,
    },
    words: { // for input fields
        margin: 15,
        height: 20,
        borderColor: '#7a42f4',
        borderWidth: 0,
        alignSelf: 'baseline',
        fontSize: 20,
        flex: 0
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
        backgroundColor: 'rgba(4,22,66,0.5)',
        flex: 1,
        position: 'absolute',
        top: 200,
        right: 0,
    },
    boxA:{ // for taxon A
        height: 40,
        width: 200,
        backgroundColor: '#d3d3d3',
        position: 'absolute',
        top: 235,
        right: 150,
        borderRadius: 10,
        flex: 1,
    },
    boxB: { // for taxon B
        height: 40,
        width: 200,
        backgroundColor: '#d3d3d3',
        position: 'absolute',
        top: 315,
        right: 150,
        borderRadius: 10,
        flex: 1,
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
    render(){
        return (
            <View style = {styles.container}>

            </View>
        );    
    }
}

export default SearchScreen;