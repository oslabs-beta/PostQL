export interface Graph {
    graphData: any;
}

//add action types
export const SET_GRAPH = "SET_GRAPH";

interface SetGraphAction {
    type: typeof SET_GRAPH;
    payload: Graph
}

export type GraphActionTypes = SetGraphAction;