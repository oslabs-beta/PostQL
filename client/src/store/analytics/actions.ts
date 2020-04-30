import { Anal, SET_QUERY_DATA } from "./types";

export function setQueryData (anal: Anal) {
  return {
    type: SET_QUERY_DATA,
    payload: anal
  }
}
