import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {createStackNavigation, createAppContainer} from 'react-navigation';

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
});

class TimelineScreen extends Component<Props> {
    render(){
        return(
            <ImageBackground source = {require('../assets/images/timetree2.png')}
                imageStyle = {{resizeMode: 'contain'}}
                style = {styles.container}
            >
            </ImageBackground>
        ); 
    }
}

export default TimelineScreen;