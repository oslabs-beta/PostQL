import {
  Anal,
  AnalActionTypes,
  SET_QUERY_DATA,
} from "./types";

const initialState: Anal = {
  queryData: [],
};

export function analReducer(
  state = initialState,
  action: AnalActionTypes,
): Anal {
  switch (action.type) {
    case SET_QUERY_DATA:
      return {
        ...state,
        queryData: action.payload.queryData,
      };
    default:
      return state;
  }
}
