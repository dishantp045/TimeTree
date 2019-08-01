/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import SearchScreen from "./src/screens/SearchScreen";
import Loading from "./src/components/Loading";
import PickerList from "./src/components/PickerList";
import Summary from "./src/components/Summary";
import Timeline from "./src/components/Timeline";
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from "react-navigation";
// import ResultsScreen from "./src/screens/ResultsScreen";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

const ResultsTabNavigator = createMaterialTopTabNavigator(
  {
    Summary: Summary,
    Timeline: Timeline
  },
  {
    initialRouteName: "Summary",
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "rgba(230,230,250,0.4)",
      inactiveTintColor: "rgba(230,230,250,0.4)",
      style: {
        backgroundColor: "rgba(230,230,250,0.4)",
        position: "relative"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#87B56A",
        borderBottomWidth: 2
      }
    }
  }
);

const AppStackNavigator = createStackNavigator(
  {
    Home: SearchScreen,
    Picker: PickerList,
    Summary: ResultsTabNavigator
  },
  {
    headerMode: "none",
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "orange"
      }
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 600,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
