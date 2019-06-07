import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text, 
    TextInput,
    ImageBackground,
    Button,
    Alert,
    Animated,
    Easing
    } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Background = Animatable.createAnimatableComponent(ImageBackground);


class LoadingImage extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {ready: false};
    }

    render(){
        return (
            <ImageBackground
                source = {require('../assets/images/TimeTreeSearch.png')}
                style = {{width: '100%', height: '100%'}}
                imageStyle = {{resizeMode: 'contain'}}
            >
                <Animatable.Image
                    source = {require('../assets/images/TimeTree_Gray.png')}
                    animation = 'fadeOut'
                    iterationCount = 'infinite'
                    useNativeDriver = {true}
                    style = {{height: '100%', width: '100%'}}
                    resizeMode = 'contain'
                    easing = 'ease-in-out'
                />
            </ImageBackground>
        );
    }
}

export default LoadingImage;