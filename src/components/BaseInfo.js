import React, { Component } from "react";
import {
  Text,
  ImageBackground,
  Animated,
  Easing,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert
} from "react-native";
import LinkedName from "./LinkedName";
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
    height: "100%",
    width: 250,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-end",
    left: 125
  },
  image: {
    position: "absolute",
    top: 175,
    height: 400,
    width: 275,
    flex: 1
  },
  moreBar: {
    position: "absolute",
    top: 500,
    left: 5,
    flex: 1,
    height: 25,
    width: 75,
    backgroundColor: "silver",
    borderRadius: 10,
    borderWidth: 2
  }
});
class BaseInfo extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      widthSize: new Animated.Value(0),
      ImageSize: new Animated.Value(0),
      TTOL:
        Math.round(this.props.response.articles.sum_simple_mol_time * 10) / 10
    };
  }
  render() {
    return (
      <Animated.View style={styles.container}>
        <ImageBackground
          source={require("./../assets/images/timetree.png")}
          style={styles.image}
          resizeMode="contain"
          alignSelf="center"
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              height: 50,
              width: 200,
              position: "absolute",
              top: 0,
              left: 25,
              flex: 1
            }}
          >
            <Text
              style={{
                color: "black",
                flex: 1,
                textAlign: "center",
                fontSize: 25,
                top: 10
              }}
            >
              {this.props.response.articles.taxon_a}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              height: 50,
              width: 200,
              position: "absolute",
              top: 50,
              left: 25
            }}
          >
            <LinkedName
              url={this.props.response.articles.link_taxon_a}
              latinName={this.props.response.articles.scientific_name_a}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              height: 50,
              width: 200,
              position: "absolute",
              top: 150,
              left: 25
            }}
          >
            <Text
              style={{
                color: "black",
                flex: 1,
                textAlign: "center",
                fontSize: 25,
                top: 10
              }}
            >
              {this.props.response.articles.taxon_b}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              height: 50,
              width: 200,
              position: "absolute",
              top: 200,
              left: 25
            }}
          >
            <LinkedName
              url={this.props.response.articles.link_taxon_b}
              latinName={this.props.response.articles.scientific_name_b}
            />
          </View>
          <Text
            style={{
              color: "black",
              flex: 1,
              textAlign: "center",
              fontSize: 35,
              top: 350,
              right: 10,
              fontWeight: "bold"
            }}
          >
            {this.state.TTOL} MYA
          </Text>
          <View style={styles.moreBar}>
            <TouchableHighlight onPress = {()=>Alert.alert("Button Pressed")} hitSlop={{ left: 0, right: 500, top: 100, bottom: 100 }}>
              <Text style={{ textAlign: "center" }}>More/Less</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </Animated.View>
    );
  }
}

BaseInfo.propTypes = {
  fetchData: PropTypes.func.isRequired,
  response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { response: state.fetchingStatus };
};

const mapStateToDispatch = dispatch => ({
  fetchData: url => dispatch(fetchData(url))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(BaseInfo);
