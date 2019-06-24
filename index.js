/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import React, { Components } from "react";
import { createStore } from "redux";
import rootReducer from "./src/data/redux-files/reducers/index-reducers";

const store = createStore(rootReducer);

const AppContainer = () => (
  <Provider store = {store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
