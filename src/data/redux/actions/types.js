/* The app will only need redux for getting data. this will cause the app to have three states
 *  State 1 is the fetching the data
 *  State 2 is successfully got the data 
 *  State 3 is failure to get data and display an error message
 */

export const CLEAR = "CLEAR";
export const SET_RESPONSE = "SET_RESPONSE";

export const FETCHING_REQUEST = "FETCHING_REQUEST";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const FETCHING_STATUS = "FETCHING_STATUS";