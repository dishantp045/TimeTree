import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dimgrey"
  }
});

class EraChart extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Svg /> 
      </View>
    );
  }
}
