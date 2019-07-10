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
    this.onPress = this._onPress.bind(this);
    this.setTaxon = this.setTaxon.bind(this);
    this.state = {
      newTaxon: "",
      correctTaxon: "",
      dataSource: []
    };
  }

  setTaxon = () => {
    const updateTaxonA = Object.keys(this.props.response.articles.found_taxon_a).map(key =>({
      key,
      ...this.props.response.articles.found_taxon_a[key]
    }));
    const updateTaxonB = Object.keys(this.props.response.articles.found_taxon_b).map(key =>({
      key,
      ...this.props.response.articles.found_taxon_b[key]
    }));
    if (
      this.props.response.articles.common_name_a == null &&
      this.props.response.articles.common_name_b == null
    ) {
      Alert.alert("Both entries are not specific enough.");
    } else if (this.props.response.articles.common_name_a == null) {
      // if a could not be resolved
      this.setState({
        correctTaxon: this.props.response.articles.common_name_b,
        newTaxon: this.props.response.articles.taxon_a,
        dataSource: updateTaxonA
      });
      console.log("Taxon A unresolved");
      console.log("dataSource", this.state.dataSource);
    } else if (this.props.response.articles.common_name_b == null) {
      // if b could not be resolved
      this.setState({
        correctTaxon: this.props.response.articles.common_name_a,
        newTaxon: this.props.response.articles.taxon_b,
        dataSource: updateTaxonB
      });
      console.log("Taxon B unresolved");
      console.log("dataSource", this.state.dataSource);
    }
  };
  updateResults = () => {
    let url = V.sprintf(
      "http://timetree.igem.temple.edu/api/pairwise/%s/%s",
      this.state.newTaxon,
      this.state.correctTaxon
    );
    const { fetchData } = this.props;
    fetchData(url);
  }
  _onPress = newName => {
    this.setState({ newTaxon: newName }, this.updateResults);
   // Alert.alert("New Taxon: "+this.state.newTaxon.toString());
    /*
    let url = V.sprintf(
      "http://timetree.igem.temple.edu/api/pairwise/%s/%s",
      this.state.newTaxon,
      this.state.correctTaxon
    );
    const { fetchData } = this.props;
    fetchData(url);
    console.log("should have fetched");
    */
  };

  componentDidMount = () => {
    this.setTaxon();
  };

  render() {
    return (
      <View style = {{backgroundColor: "thistle"}}>
        <Header
          centerComponent={{
            text: "By " + this.state.newTaxon + ", did you mean...",
            style: { color: "white", fontSize: 20, textAlign: "center" }
          }}
          backgroundColor="black"
        />
        <FlatList
          data = {this.state.dataSource}
          renderItem = {({item}) => <PickerBox title = {item.c_syn_name} onPress = {() => this._onPress(item.c_syn_name)} />}
          keyExtractor = {(item, index)=> item.c_syn_name}
          backgroundColor = "thistle"
          
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
