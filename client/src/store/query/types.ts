export interface Inst {
    instanceData: any;
}

//add action types
export const SET_INSTANCE = "SET_INSTANCE";

interface SetInstanceAction {
    type: typeof SET_INSTANCE;
    payload: Inst
}

export type InstActionTypes = SetInstanceAction;