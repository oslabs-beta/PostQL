export interface Anal {
    queryData: any;
}

// add action types
export const SET_QUERY_DATA = "SET_QUERY_DATA";

interface SetQueryDataAction {
    type: typeof SET_QUERY_DATA;
    payload: Anal;
}

export type AnalActionTypes = SetQueryDataAction;
