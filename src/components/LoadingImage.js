import React, {Component} from 'react-native';
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
import * as GSAP from 'gsap';



class LoadingImage extends Components<Props>{
    constructor(props){
        super(props);
        this.loading = new Animated.Value(0);
        this.state = {ready: false};
    }
    
    render(){
        return (

        );
    }
}

export default LoadingImage;