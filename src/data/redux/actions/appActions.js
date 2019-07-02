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
    fetch("https://randomuser.me/api/?results=10")
      .then(response => {
        if (response.ok) {
          const json = response.json();
          dispatch(fetchingSuccess(json));
          console.log("JSON", json);
        }
      })
      .catch(error => {
        dispatch(fetchingFailure(error));
        console.log("Error", error);
      });
  };
};
