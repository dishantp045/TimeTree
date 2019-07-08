import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "#FFF",
    elevation: 2
  },
  title: {
    fontSize: 16,
    color: "#000"
  },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center"
  },
  description: {
    fontSize: 11,
    fontStyle: "italic"
  }
});

const PickerBox = title => {
  return (
    <View style={styles.container}>
      <Text style={styles.container_text}>{title}</Text>
    </View>
  );
};

export default PickerBox;
