import React, { Component } from "react";
import { Linking, Text, StyleSheet, TouchableHighlight, View } from "react-native";



class LinkedName extends Component<Props> {
  constructor(props) {
    super(props);
    this.goToUrl = this.goToUrl.bind(this);
  }

  render() {
    const { latinName } = this.props;
    return (
      <View>
        <Text style={this.props.style} onPress={this.goToUrl}>
          {latinName}
        </Text>
      </View>
    );
  }

  goToUrl() {
    const { url } = this.props;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        alert("cannot open this link");
      }
    });
  }
}

export default LinkedName;
