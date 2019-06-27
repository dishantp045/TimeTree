import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  Keyboard,
  Animated,
  Easing,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import { Header } from "react-native-elements";
import { connect } from "react-redux";
import {
  fetchingSuccess,
  fetchingRequest,
  fetchingFailure,
  fetchData
} from "../data/redux/actions/appActions.js";
import PropTypes from "prop-types";

// import * as Animatable from 'react-native-animatable';

var V = require("voca");

const styles = StyleSheet.create({
  container: {
    // just for main screen if need be
    backgroundColor: "dimgrey"
  },
  image: {
    // for time tree logo
    flex: 1,
    width: 400,
    height: 400
  },
  words: {
    // for input fields
    margin: 15,
    height: 20,
    borderColor: "#7a42f4",
    borderWidth: 0,
    alignSelf: "baseline",
    fontSize: 20,
    flex: 0
  },
  small: {
    // random too scared to get rid of
    alignItems: "baseline",
    flex: 3
  },
  info: {
    // for info button
    height: 50,
    width: 50,
    flex: 2,
    position: "absolute",
    left: 315,
    bottom: -675
  },
  panel: {
    // for panel that input stuff will lay on
    height: 200,
    width: 400,
    backgroundColor: "rgba(4,22,66,0.5)",
    flex: 1,
    position: "absolute",
    top: 200,
    right: 0
  },
  boxA: {
    // for taxon A
    height: 40,
    width: 200,
    backgroundColor: "#d3d3d3",
    position: "absolute",
    top: 235,
    right: 150,
    borderRadius: 10,
    flex: 1
  },
  boxB: {
    // for taxon B
    height: 40,
    width: 200,
    backgroundColor: "#d3d3d3",
    position: "absolute",
    top: 315,
    right: 150,
    borderRadius: 10,
    flex: 1
  },
  searchButton: {
    height: 30,
    width: 80,
    backgroundColor: "#d3d3d3",
    flex: 3,
    position: "absolute",
    right: 25,
    top: 190,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
});

class SearchScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
    this.state = {
      taxonA: "",
      taxonB: "",
      isLoading: false,
      opacity: new Animated.Value(0)
    };
  }
  _onPress = () => {

    console.log("Begin");
    fetchData(
    this.props.fetchData(
      V.sprintf(
        "http://timetree.igem.temple.edu/api/pairwise/%s/%s",
        this.state.taxonA,
        this.state.taxonB
      )
    ));

    console.log(
      V.sprintf(
        "http://timetree.igem.temple.edu/api/pairwise/%s/%s",
        this.state.taxonA,
        this.state.taxonB
      )
    );
    console.log("end");
  };
  handleTaxonA = text => {
    this.setState({ taxonA: text });
  };
  handleTaxonB = text => {
    this.setState({ taxonB: text });
  };
  _infoPressIn = () => {
    this.state.opacity.setValue(0);
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };
  _infoPressOut = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/TimeTreeSearch.png")}
          imageStyle={{ resizeMode: "contain" }}
          style={{ height: "100%", width: "100%" }}
        >
          <Header
            centerComponent={{
              text: "TimeTree",
              style: { color: "silver", fontSize: 40, textAlign: "center" }
            }}
            backgroundColor="green"
          />
          <View style={styles.panel} />
          <View style={styles.boxA}>
            <TextInput
              placeholder="Taxon A..."
              style={styles.words}
              onChangeText={this.handleTaxonA}
            />
          </View>
          <View style={styles.boxB}>
            <TextInput
              placeholder="Taxon B..."
              style={styles.words}
              onChangeText={this.handleTaxonB}
            />
          </View>
          <TouchableHighlight
            onPress={this._onPress}
            hitSlop={{ left: 50, right: 50, top: 50, bottom: 50 }}
          >
            <View style={styles.searchButton}>
              <Text style={styles.text}>Search</Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              position: "absolute",
              top: "35%",
              right: "15%",
              left: "25%"
            }}
          >
            <ActivityIndicator
              animating={this.props.response.isFetching}
              size="large"
              color="pink"
              style={{ alignItem: "center" }}
            />
          </View>
          <TouchableHighlight
            onPressIn={this._infoPressIn}
            onPressOut={this._infoPressOut}
          >
            <Image
              source={require("../assets/images/info2.png")}
              style={styles.info}
              resizeMode="contain"
            />
          </TouchableHighlight>
          <Animated.Image
            source={require("../assets/images/iPhoneTimeTreeInfo.png")}
            style={[
              {
                opacity: this.state.opacity,
                transform: [
                  {
                    scale: this.state.opacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.85, 1]
                    })
                  }
                ],
                height: 350,
                width: 350,
                alignSelf: "center",
                position: "absolute",
                top: 200
              }
            ]}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
    );
  }
}

SearchScreen.propTypes = {
  fetchData: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { response: state };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(SearchScreen);
