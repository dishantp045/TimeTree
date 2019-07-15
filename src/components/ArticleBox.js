import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LinkedName from "./LinkedName";

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(0.0,0.0,0.0,0.9)",
    height: 150,
    width: 300,
    position: "absolute",
    alignSelf: "center",
    flex: 2,
    flexDirection: "column",
    borderRadius: 25
  },
  layout: {
    textAlign: "center",
    color: "#FFF"
  },
  input: {
    textAlign: "center",
    color: "#ff8c00"
  }
});

class ArticleBox extends Component<Props> {
  render() {
    return (
      <View style={styles.box}>
        <Text style = {styles.layout}>Time: <Text styles = {styles.input}>{this.props.time}</Text></Text>
        <Text />
        <Text>Publication Year: {this.props.year}</Text>
        <Text />
        <Text>
          Publication Title: {this.props.title}
        </Text>
        <Text />
        <Text>Author: {this.props.author}</Text>
      </View>
    );
  }
}

export default ArticleBox;
