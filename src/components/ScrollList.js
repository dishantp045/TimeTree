import React, { Component } from "react";
import { FlatList, View, Text, ScrollView, StyleSheet } from "react-native";
import LinkedName from "../components/LinkedName";

class ScrollList extends Component<Props> {
  render() {
    return (
      <View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    backgroundColor: "black",
    flex: 1
  },
  backgroundPanel: {
    backgroundColor: "black",
    height: 50,
    width: 100
  }
});

export default ScrollList;
