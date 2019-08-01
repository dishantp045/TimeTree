import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import {
  fetchingSuccess,
  fetchingRequest,
  fetchingFailure,
  fetchData
} from "../data/redux/actions/appActions.js";
import PropTypes from "prop-types";
import LinkedName from "./LinkedName";
import ArticleBox from "./ArticleBox";
import { Header } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dimgrey",
    flex: 1
  },
  posLeft: {
    alignItems: "center",
    position: "absolute",
    top: 40,
    left: 25
  },
  posRight: {
    alignItems: "center",
    position: "absolute",
    top: 40,
    left: 175
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
    borderRadius: 25,
    borderWidth: 4
  },
  midPanel: {
    backgroundColor: "rgba(0.0,0.0,0.0,0.9)",
    height: 100,
    width: 300,
    position: "absolute",
    bottom: 120,
    alignSelf: "center",
    flex: 2,
    flexDirection: "column",
    borderRadius: 25,
    borderWidth: 4
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
      ),
      TTOL:
        Math.round(this.props.response.articles.sum_simple_mol_time * 10) / 10,
      median: Math.round(this.props.response.articles.sum_median_time * 10) / 10
    };
    // console.log(STORE, this.props.response.articles);
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
            <Text style={styles.header_text}>Query Taxa</Text>
            <View style={styles.posLeft}>
              <Text
                style={{ textAlign: "center", color: "#FFF", fontSize: 17 }}
              >
                Taxon A
              </Text>
              <Text />
              <Text style={styles.text}>{this.state.taxonA}</Text>
              <Text />
              <LinkedName
                url={this.state.hitRecords[0].link_taxon_a}
                latinName={this.state.sciNameA}
              />
            </View>
            <View style={styles.posRight}>
              <Text
                style={{ textAlign: "center", color: "#FFF", fontSize: 17 }}
              >
                Taxon B
              </Text>
              <Text />
              <Text style={styles.text}>{this.state.taxonB}</Text>
              <Text />
              <LinkedName
                url={this.state.hitRecords[0].link_taxon_b}
                latinName={this.state.sciNameB}
              />
            </View>
          </View>
          <View style={styles.midPanel}>
            <Text style={styles.header_text}>Result</Text>
            <Text />
            <Text style={styles.text}>TTOL: {this.state.TTOL} MYA</Text>
            <Text />
            <Text style={styles.text}>median: {this.state.median} MYA</Text>
          </View>
          <View style={{ position: "absolute", bottom: -35, marginLeft: -5 }}>
            <FlatList
              horizontal
              data={this.state.hitRecords}
              renderItem={({ item }) => {
                return (
                  <ArticleBox
                    title={item.title}
                    year={item.year}
                    time={item.time}
                    author={item.author}
                  />
                );
              }}
              itemSeparatorComponent={() => (
                <View
                  style={{
                    backgroundColor: "#ff8c00",
                    height: 100,
                    width: 100
                  }}
                />
              )}
            />
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
  return { response: state.fetchingStatus };
};

const mapStateToDispatch = dispatch => ({
  fetchData: url => dispatch(fetchData(url))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Summary);
