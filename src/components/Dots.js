import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  Alert,
  Platform,
  findNodeHandle
} from "react-native";

class Dots extends Component<Props>{
    render(){
        return (
            <TouchableWithoutFeedback
      onPress={() => {
        alert("button pressed");
      }}
      alignItems="center"
    >
      <Image source={require("../assets/images/dot.png")} style={image} 
          position = 'absolute'
          bottom = {this.props.bottom}
          left = {this.props.left}
      />
    </TouchableWithoutFeedback>
        );
    }
}


const image = {
  height: 8,
  width: 8,
  flex: 1,
};

export default Dots;