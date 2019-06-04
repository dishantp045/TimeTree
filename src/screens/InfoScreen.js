import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity,Text,View,StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const styles = StyleSheet.create({
    button: {
        height: 20,
        width: 60,
        backgroundColor: 'grey',
        position: 'absolute',
        top: 560,
        right: 163,
        borderRadius: 15,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
    }
});



class InfoScreen extends Component<Props> {
    _onPress() {
        alert('Button Pressed');
    }
    render(){
        return(
            <ImageBackground source = {require('../assets/images/iPhoneTimeTreeInfo.png')}
                imageStyle = {{resizeMode: 'contain'}}
                style = {{width: '100%', height: '100%'}}
                backgroundColor = 'white'
            >
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {this._onPress}
                    hitSlop = {{top: 15, bottom: 15, right: 20, left: 20}}
                >
                    <Text style = {styles.text}>Ok</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default InfoScreen;