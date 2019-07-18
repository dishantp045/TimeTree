import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LinkedName from "./LinkedName";

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(0.0,0.0,0.0,0.9)",
    height: 150,
    width: 300,
    alignSelf: "center",
    flex: 2,
    flexDirection: "column",
    borderRadius: 25,
    elevation: 2,
    marginLeft: 45,
    borderWidth: 4
  },
  layout: {
    textAlign: "center",
    color: "#FFF"
  },
  input: {
    color: "#ff8c00"
  }
});

class ArticleBox extends Component<Props> {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.layout}>
          Time: <Text styles={styles.input}>{this.props.time}</Text>
        </Text>
        <Text />
        <Text style={styles.layout}>Publication Year: {this.props.year}</Text>
        <Text />
        <Text style={styles.layout} numberOfLines = {3} >Publication Title: {this.props.title}</Text>
        <Text />
        <Text style={styles.layout}>Author: {this.props.author}</Text>
      </View>
    );
  }
}

export default ArticleBox;
