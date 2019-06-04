import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {createStackNavigation, createAppContainer} from 'react-navigation';

const styles = StyleSheet.create ({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
    },
});

class SummaryScreen extends Component<Props>{
    render(){
        return (
            <ImageBackground source = {require('../assets/images/timetree.png')}
                style = {styles.container}
                ImageStyle = {{resizeMode: 'contain'}}
            >
            </ImageBackground>
        );
    }
}
export default SummaryScreen;