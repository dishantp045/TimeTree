import {
  FETCHING_SUCCESS,
  FETCHING_REQUEST,
  FETCHING_FAILURE,
  FETCHING_STATUS
} from "./types";

// Actions for the redux store

export const fetchingRequest = () => {
  return {
    type: FETCHING_REQUEST
  };
};

export const fetchingSuccess = json => {
  return {
    type: FETCHING_SUCCESS,
    payload: json
  };
};

export const fetchingFailure = error => {
  return {
    type: FETCHING_FAILURE,
    payload: error
  };
};

// Function will not work in a component
// Maybe the issue is redux
// more likely to be the Fetch not working in this function
export const fetchData = url => {
  console.log("Should enter async dispatch");
  return async dispatch => {
    dispatch({ type: FETCHING_STATUS, payload: { isFetching: true } });
    try {
      let response = await fetch(url);
      let json = await response.json();
      let dispatchChecker = dispatch({
        type: FETCHING_STATUS,
        payload: { isFetching: false, articles: json }
      });
      console.log(JSON.stringify(json, null, 2));
      //console.log(JSON.stringify(json, null, 2));
    } catch (error) {
      console.log("ERROR", error);
      dispatch({
        type: FETCHING_STATUS,
        payload: { isFetching: false, errorMessage: error }
      });
    }
  };
};
