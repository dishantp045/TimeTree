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
    backgroundColor: "slategrey",
    elevation: 2
  },
  shadow: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "darkslategray",
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
    color: "#FFF"
  },
  description: {
    fontSize: 11,
    fontStyle: "italic"
  }
});

class PickerBox extends Component<props> {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.shadow}>
        <View style={styles.container}>
          <Text style={styles.container_text} onPress = {this.props.onPress}>{title}</Text>
        </View>
      </View>
    );
  }
}
export default PickerBox;
