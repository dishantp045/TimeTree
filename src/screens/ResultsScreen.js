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

// components 

class ResultsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isSummary: false };
  }

  render(){
    const content = null;
    if(isSummary == false){

    }
  }
}

export default ResultsScreen;
