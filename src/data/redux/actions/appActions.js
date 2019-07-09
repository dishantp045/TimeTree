import { FETCHING_SUCCESS, FETCHING_REQUEST, FETCHING_FAILURE } from "./types";

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
    dispatch(fetchingRequest());
    try{
      let response = await fetch(url);
      let json = await response.json();
      let dispatchChecker = dispatch(fetchingSuccess(json));
      console.log("DISPATCH", dispatchChecker);
      console.log("JSON",json);
      console.log(JSON.stringify(json, null, 2));
    }catch(error){
      console.log("ERROR",error);
      dispatch(fetchingFailure(error));
    }
  };
};
