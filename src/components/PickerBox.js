import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "silver",
    height: 50,
    width: 400,
    textAlign: "center",
    alignSelf: "center",
    flex: 2,
    flexDirection: "column",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.9)",
    elevation: 2,
    borderWidth: 1
  },
  shadow: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 2,
    backgroundColor: "darkslategray",
    elevation: 2
  },
  title: {
    fontSize: 16,
    color: "#000"
  },
  container_text: {
    fontSize: 14,
    flex: 1,
    flexDirection: "column",
    marginLeft: 16,
    color: "black",
    justifyContent: "center",
    fontFamily: "Gujarati Sangam MN"
  },
  description: {
    fontSize: 11,
    fontStyle: "italic"
  }
});

class PickerBox extends Component<props> {
  render() {
    const { title } = this.props;
    const { subTitle } = this.props;
    const { group } = this.props;
    return (
      // <View style={styles.shadow}>
      <View style={styles.container}>
        <Text style={styles.container_text} onPress={this.props.onPress}>
          {subTitle}
        </Text>
        <Text style = {styles.container_text}>{group}: {title}</Text>
      </View>
      // </View>
    );
  }
}
export default PickerBox;