import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1, // for fitting pages around different screens
    backgroundColor: 'white'
    },

    image: {
        alignSelf: 'center',
        width: 450,
        height: 2000,
        flex: 1
    },
});

class StartScreen extends Component<Props> {
    render(){
        return(
            <View style = {styles.container}>
                <Image
                style = {styles.image} 
                resizeMode = 'contain' // tries to contain the image on the Screen
                source = {require('../assets/images/StartScreen.png')} 
                />
            </View>
        );
    }
}

export default StartScreen;