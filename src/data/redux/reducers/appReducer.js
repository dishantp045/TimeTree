import {
  FETCHING_SUCCESS,
  FETCHING_REQUEST,
  FETCHING_FAILURE,
  FETCHING_STATUS
} from "../actions/types";
import * as data from "./../../../../pickerdata.json"; // for debugging issues
import * as sample from "../../../../sampledata.json";
import { combineReducers } from "redux";

const initialState = {
  isFetching: false,
  errorMessage: "",
  articles: null
};

const appReducer = (state = initialState, action) => {
  switch (action.types) {
    case FETCHING_REQUEST:
      console.log("request from reducer");
      return { ...state, isFetching: true };
    case FETCHING_FAILURE:
      console.log("failure from reducer");
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_SUCCESS:
      console.log("success from reducer");
      return { ...state, isFetching: false, articles: action.payload };
    default:
      return state;
  }
};

function fetchingStatusReducer(state = {}, action) {
  switch (action.type) {
    case FETCHING_STATUS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  fetchingStatus: fetchingStatusReducer
});
