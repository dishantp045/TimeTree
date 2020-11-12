import React, { Component } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import LinkedName from "./LinkedName";

const V = require("voca");

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
  }
});

class ArticleBox extends Component<Props> {
  constructor(props) {
    super(props);
    this.goToUrl = this.goToUrl.bind(this);
  }
  goToUrl = pubmedID => {
    let url = V.sprintf(
      "https://www.ncbi.nlm.nih.gov/pubmed?linkname=pubmed_pubmed&from_uid=%s",
      pubmedID
    );
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert("cannot open this link");
      }
    });
  };
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.layout}>
          Time: <Text style={{ color: "orange" }}>{this.props.time}</Text>
        </Text>
        <Text />
        <Text style={styles.layout}>Publication Year: {this.props.year}</Text>
        <Text />
        <View>
          <Text
            style={styles.layout}
            numberOfLines={3}
            onPress={() => this.goToUrl(this.props.id)}
          >
            Publication Title:{" "}
            <Text style={{ color: "orange" }}>{this.props.title}</Text>
          </Text>
        </View>
        <Text />
        <Text style={styles.layout}>Author: {this.props.author}</Text>
      </View>
    );
  }
}

export default ArticleBox;
