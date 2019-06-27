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
      let response = await fetch(url);
      let json = response.json();
      dispatch(fetchingSuccess(json));
    } catch(error){
      dispatch(fetchingFailure(error));
    }
  }
};
