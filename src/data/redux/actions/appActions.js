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
    dispatch(fetchingRequest);
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(fetchingSuccess(responseJson));
      })
      .catch(error => {
        dispatch(fetchingFailure(error));
        console.log(error);
      });
  };
};
