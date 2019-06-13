import React, { Component } from "react-native";
import {
  View,
  Image,
  Animated,
  TouchableHighlight,
  Easing,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dimgrey"
  }
});

class TimelineScreen extends Components<Props> {
    render() {
        return ( 
            <View styles = {styles.container}>
            </View>
        );
    }
}
