import React, { Component } from "react";
import { View, FlatList, StyleSheet, ScrollView, Alert } from "react-native";
import { connect } from "react-redux";
import {
  fetchingSuccess,
  fetchingRequest,
  fetchingFailure,
  fetchData
} from "../data/redux/actions/appActions.js";
import PropTypes from "prop-types";
import { Header, List, ListItem } from "react-native-elements";
import PickerBox from "./PickerBox";

const V = require("voca");

class PickerList extends Component<Props> {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.setTaxon = this.setTaxon.bind(this);
    this.state = {
      newTaxon: "",
      correctTaxon: "",
      dataSource: []
    };
  }

  setTaxon = () => {
    if (
      this.props.response.articles.common_name_a === null &&
      this.props.response.articles.common_name_b === null
    ) {
      Alert.alert("Both entries are not specific enough.");
    } else if (this.props.response.articles.common_name_a == null) {
      // if a could not be resolved
      this.setState({
        correctTaxon: this.props.response.articles.common_name_b,
        newTaxon: this.props.response.articles.taxon_a,
        dataSource: this.props.response.articles.found_taxon_a
      });
      console.log("Taxon A unresolved");
    } else if (this.props.response.articles.common_name_b == null) {
      // if b could not be resolved
      this.setState({
        correctTaxon: this.props.response.articles.common_name_a,
        newTaxon: this.props.response.articles.taxon_b,
        dataSource: this.props.response.articles.found_taxon_b
      });
      console.log("Taxon B unresolved");
    }
  };

  onPress = newName => {
    this.setState({ newTaxon: newName });
    let url = V.sprintf(
      "http://timetree.igem.temple.edu/api/pairwise/%s/%s",
      this.state.newTaxon,
      this.state.correctTaxon
    );
    const { fetchData } = this.props;
    fetchData(url);
    console.log("should have fetched");
  };

  componentDidMount = () => {
    this.setTaxon();
    console.log("dataSource", this.state.dataSource);
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "By " + this.state.newTaxon + ", did you mean...",
            style: { color: "white", fontSize: 20, textAlign: "center" }
          }}
          backgroundColor="black"
        />
      </View>
    );
  }
}

PickerList.propTypes = {
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
)(PickerList);
