/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import React, { Components } from "react";
import { createStore, applyMiddleware } from "redux";
import appReducer from "./src/data/redux/reducers/appReducer";
import thunk from "redux-thunk";

const store = createStore(appReducer, applyMiddleware(thunk));
console.log("Store", store.getState());
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
