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
    backgroundColor: "dimgrey",
  },
  image: {
    // for time tree logo
    flex: 1,
    width: 400,
    height: 400
  },
  words: {
    // for input fields
    bottom: 5,
    margin: 15,
    height: 20,
    borderColor: "#7a42f4",
    borderWidth: 0,
    alignSelf: "baseline",
    fontSize: 20,
    flex: 0,
    textAlign: "center",
    color: "darkslategrey"
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
    alignSelf: "center",
    // for panel that input stuff will lay on
    height: 125,
    width: 365,
    backgroundColor: "rgba(100,225,450,0.4)",
    flex: 1,
    position: "absolute",
    top: 225,
    right: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(450,450,450,0.1)'
  },
  boxA: {
    alignSelf: "center",
    // for taxon A
    height: 40,
    width: 200,
    backgroundColor: "#FFF",
    position: "absolute",
    top: 10,
    right: 150,
    borderRadius: 15,
    flex: 1,
    borderWidth: 3
  },
  boxB: {
    // for taxon B
    alignSelf: "center",
    height: 40,
    width: 200,
    backgroundColor: "#FFF",
    position: "absolute",
    top: 75,
    right: 150,
    borderRadius: 15,
    flex: 1,
    borderWidth: 3
  },
  searchButton: {
    alignSelf: "center",
    height: 30,
    width: 80,
    backgroundColor: "#d3d3d3",
    flex: 3,
    position: "absolute",
    right: 25,
    top: 45,
    borderRadius: 15,
    borderWidth: 3
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
      opacity: new Animated.Value(0)
    };
  }
  _onPress = () => {
    if (this.state.taxonA == "" || this.state.taxonB == "") {
      Alert.alert("One or more fields have been left empty.");
      return;
    }
    let url = V.sprintf(
      "http://timetree.igem.temple.edu/api/pairwise/%s/%s",
      this.state.taxonA,
      this.state.taxonB
    );
    const { fetchData } = this.props;
    fetchData(url);
    console.log("should have fetched");
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
              style: {
                color: "black",
                fontSize: 45,
                textAlign: "center",
                position: "absolute",
                bottom: -20
              }
            }}
            backgroundColor="rgba(230,230,250,0.4)"
          />
          <View style={styles.panel}>
            <View style={styles.boxA}>
              <TextInput
                placeholder="Taxon A..."
                style={styles.words}
                onChangeText={this.handleTaxonA}
                placeholderTextColor = "dimgrey"
              />
            </View>
            <View style={styles.boxB}>
              <TextInput
                placeholder="Taxon B..."
                style={styles.words}
                onChangeText={this.handleTaxonB}
                placeholderTextColor = "dimgrey"
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
          </View>
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
              color="back"
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

const mapStateToDispatch = dispatch => ({
  fetchData: url => dispatch(fetchData(url))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SearchScreen);
