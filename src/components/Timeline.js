import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Animation,
  Easing,
  StyleSheet,
  Button
} from "react-native";
import { connect } from "react-redux";
import {
  fetchingSuccess,
  fetchingRequest,
  fetchingFailure,
  fetchData
} from "../data/redux/actions/appActions.js";
import PropTypes from "prop-types";
import BaseInfo from "./BaseInfo";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "dimgrey",
    flex: 1
  }
});

class Timeline extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <BaseInfo/>
      </View>
    );
  }
}

export default Timeline;
