import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  fetchingSuccess,
  fetchingRequest,
  fetchingFailure,
  fetchData
} from "../data/redux/actions/appActions.js";
import PropTypes from "prop-types";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Summary from "./../components/Summary";
import Timeline from "./../components/Timeline";

class ResultsScreen extends Component<Props> {
  
}





export default ResultsScreen;
