import {
  FETCHING_SUCCESS,
  FETCHING_REQUEST,
  FETCHING_FAILURE
} from "../actions/types";

const initialState = {
  isFetching: false,
  errorMessage: "",
  articles: []
};

const appReducer = (state = initialState, action) => {
  switch (action.types) {
    case FETCHING_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_SUCCESS:
      return { ...state, isFetching: false, articles: action.payload };
    default:
      return state;
  }
};

export default appReducer;
