import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";
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
      incorrectTaxon: "",
      newTaxon: "",
      correctTaxon: "",
      dataSource: []
    };
  }

  setTaxon = () => {
    const updateTaxonA = Object.keys(
      this.props.response.articles.found_taxon_a
    ).map(key => ({
      key,
      ...this.props.response.articles.found_taxon_a[key]
    }));
    const updateTaxonB = Object.keys(
      this.props.response.articles.found_taxon_b
    ).map(key => ({
      key,
      ...this.props.response.articles.found_taxon_b[key]
    }));
    console.log("TAXON A ARRAY", updateTaxonA);
    console.log("TAXON B ARRAY", updateTaxonB);
    if (
      (this.props.response.articles.common_name_a == null &&
        this.props.response.articles.common_name_b == null) ||
      (this.props.response.articles.taxon_b == null &&
        this.props.response.articles.taxon_a == null)
    ) {
      Alert.alert("Both entries are not specific enough.");
    } else if (
      this.props.response.articles.common_name_a == null ||
      this.props.response.articles.taxon_a == null
    ) {
      // if a could not be resolved
      this.setState({
        incorrectTaxon: this.props.response.articles.taxon_a,
        correctTaxon: this.props.response.articles.common_name_b,
        newTaxon: this.props.response.articles.taxon_a,
        dataSource: updateTaxonA
      });
      console.log("Taxon A unresolved");
      console.log("dataSource", this.state.dataSource);
    } else if (
      this.props.response.articles.common_name_b == null ||
      this.props.response.articles.taxon_b
    ) {
      // if b could not be resolved
      this.setState({
        incorrectTaxon: this.props.response.articles.taxon_b,
        correctTaxon: this.props.response.articles.common_name_a,
        newTaxon: this.props.response.articles.taxon_b,
        dataSource: updateTaxonB
      });
      console.log("Taxon B unresolved");
      console.log("dataSource", this.state.dataSource);
    }
  };
  toNavigate = () => {
    if (
      this.props.response.articles.common_name_b == null ||
      this.props.response.articles.common_name_a == null
    ) {
      Alert.alert(
        "One of the entries cannot be found. Please restart your search."
      );
      this.props.navigation.navigate("Home");
    } else {
      this.props.navigation.navigate("Summary");
    }
  };
  updateResults = () => {
    let url = V.sprintf(
      "http://timetree.igem.temple.edu/api/pairwise/%s/%s",
      this.state.newTaxon,
      this.state.correctTaxon
    );
    const { fetchData } = this.props;
    fetchData(url)
      .then(() => this.toNavigate())
      .catch(error => console.log("ERROR", error));
  };
  _onPress = newName => {
    this.setState({ newTaxon: newName }, () => this.updateResults());
    // Alert.alert("New Taxon: "+this.state.newTaxon.toString());
  };

  componentDidMount = () => {
    this.setTaxon();
  };

  render() {
    return (
      <View style={{ backgroundColor: "dimgrey" }}>
        <Header
          centerComponent={{
            text: "By " + this.state.incorrectTaxon + ", did you mean...",
            style: {
              color: "black",
              fontSize: 19,
              textAlign: "center",
              fontFamily: "Helvetica-Bold"
            }
          }}
          backgroundColor="dimgrey"
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <PickerBox
              title={item.c_syn_name}
              subTitle={item.c_node_name_scientific}
              group={item.group}
              onPress={() => this._onPress(item.c_syn_name)}
            />
          )}
          keyExtractor={(item, index) => item.c_syn_name}
          backgroundColor="dimgrey"
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
  return { response: state.fetchingStatus };
};

const mapStateToDispatch = dispatch => ({
  fetchData: url => dispatch(fetchData(url))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(PickerList);
