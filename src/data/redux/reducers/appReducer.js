import {
  FETCHING_SUCCESS,
  FETCHING_REQUEST,
  FETCHING_FAILURE
} from "../actions/types";
import * as data from "./../../../../pickerdata.json" // for debugging issues
const initialState = {
  isFetching: false,
  errorMessage: "",
  articles: data
};

const appReducer = (state = initialState, action) => {
  switch (action.types) {
    case FETCHING_REQUEST:
      console.log('request from reducer');
      return { ...state, isFetching: true };
    case FETCHING_FAILURE:
      console.log('failure from reducer');
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_SUCCESS:
      console.log('success from reducer');
      return { ...state, isFetching: false, articles: action.payload };
    default:
      return state;
  }
};

export default appReducer;
