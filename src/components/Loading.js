// causes the app to crash

import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
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
    backgroundColor: "dimgrey",
    flex: 1
  },
  image: {
    position: "absolute",
    top: 175,
    height: 400,
    width: 400,
    flex: 1
  }
});

// for some reason the backgroundcolor will not render
class Loading extends Component<Props> {
  componentDidMount = () => {
    console.log("STORE", this.props.response.articles);
    while (this.props.response.isFetching != true) {}
   
    // determines where to send the query
    if (this.props.response.articles.error == undefined) {
      // this.props.navigation.navigate("Summary");
    }
    else if (this.props.response.articles.error.type === "NameResolutionException") {
      // sends to picker
      this.props.navigation.navigate("Picker");
    } else {
      // send back to search screen
      alert("Error occurred during search.");
      this.props.navigation.navigate("Home");
    } 
  };
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View
          useNativeDriver={true}
          animation="fadeOut"
          iterationCount={2000}
          easing="ease-out-quad"
        >
          <Image
            source={require("../assets/images/TimeTreeSearch.png")}
            style={styles.image}
            resizeMode="contain"
            alignSelf="center"
          />
        </Animatable.View>
      </View>
    );
  }
}

Loading.propTypes = {
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
)(Loading);
