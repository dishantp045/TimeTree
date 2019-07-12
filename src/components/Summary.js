import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import { connect } from "react-redux";
import {
  fetchingSuccess,
  fetchingRequest,
  fetchingFailure,
  fetchData
} from "../data/redux/actions/appActions.js";
import PropTypes from "prop-types";
import LinkedName from "./LinkedName";

const styles = StyleSheet.create({
  container: {
    color: "black"
  },
  text: {
    textAlign: "center",
    color: "#FFF"
  },
  header_text: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFF"
  },
  image: {
    position: "absolute",
    top: 200,
    height: 375,
    width: 375,
    flex: 1
  },
  topPanel: {
    backgroundColor: "rgba(0.0,0.0,0.0,0.9)",
    height: 150,
    width: 300,
    position: "absolute",
    alignSelf: "center",
    flex: 2,
    flexDirection: "column",
    borderRadius: 25
  }
});

class Summary extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      taxonA: this.props.response.articles.taxon_a,
      taxonB: this.props.response.articles.taxon_b,
      sciNameA: this.props.response.articles.scientific_name_a,
      sciNameB: this.props.response.articles.scientific_name_b,
      hitRecords: Object.keys(this.props.response.articles.hit_records).map(
        key => ({ key, ...this.props.response.articles.hit_records[key] })
      )
    };
  }
  componentDidMount = () => {
    console.log("STATE", this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/timescale.png")}
          style={styles.image}
          resizeMode="contain"
          alignSelf="center"
        >
          <View style={styles.topPanel}>
            <Text style = {styles.header_text}>Query Taxa</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

Summary.propTypes = {
  fetchData: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { response: state };
};

const mapStateToDispatch = dispatch => ({
  fetchData: url => dispatch(fetchData(url))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Summary);
