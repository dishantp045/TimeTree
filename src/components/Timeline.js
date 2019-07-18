import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Animation,
  Easing,
  StyleSheet,
  Button
} from "react-navigation";
import { connect } from "react-redux";
import {
  fetchingSuccess,
  fetchingRequest,
  fetchingFailure,
  fetchData
} from "../data/redux/actions/appActions.js";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContents: "center"
  }
});

class Timeline extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Summary"
          onPress={() => this.props.navigation.navigate("Summary")}
        />
      </View>
    );
  }
}

export default Timeline;
