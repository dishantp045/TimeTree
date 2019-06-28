import { FETCHING_SUCCESS, FETCHING_REQUEST, FETCHING_FAILURE } from "./types";

export const fetchingRequest = () => {
  {
    type: FETCHING_REQUEST;
  }
};

export const fetchingSuccess = json => {
  {
    type: FETCHING_SUCCESS;
    payload: json;
  }
};

export const fetchingFailure = error => {
  {
    type: FETCHING_FAILURE;
    payload: error;
  }
};

export const fetchData = url => {
  return async dispatch => {
    dispatch(fetchingRequest());
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const json = await response.text();
      if (response.ok) {
        dispatch(fetchingSuccess(json));
        console.log(JSON.stringify(json));
      } else {
        console.log("fetch did not resolve");
      }
    } catch (error) {
      dispatch(fetchingFailure(error));
    }
  };
};
