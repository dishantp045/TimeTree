import React, { Component } from "react";
import { Linking, Text, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  sciName: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black"
  }
});

class LinkedName extends Component<Props> {
  render() {
    const { latinName } = this.props;

    return (
      <TouchableHighlight
        onPress={this.goToUrl}
        hitSlop={{ top: 50, left: 50, bottom: 50, right: 50 }}
      >
        <Text style={styles.sciName}>{latinName}</Text>
      </TouchableHighlight>
    );
  }

  goToUrl() {
    const { url } = this.props;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert("cannot open this link");
      }
    });
  }
}

export default LinkedName;
