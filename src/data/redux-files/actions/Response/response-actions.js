import {CLEAR_ENTRY, SET_ENTRY} from "./taxonB-types";

export const bCLEAR = () => {
  return {
    type: CLEAR_ENTRY
  }
}

export const bSET = (text) => {
  return {
    type: SET_ENTRY,
    payload: text
  }
}
