import React, {Component} from 'react';
import {Image,Animated,Easing} from 'react-native';

class Info extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {opacity: new Animated.Value(0)}
    }
    render(){
        return(
            <Animated.View>
                
            </Animated.View>
        );
    }
}