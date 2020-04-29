import {
    Graph,
    GraphActionTypes,
    SET_GRAPH
} from "./types";

const initialState: Graph = {
    graphData: undefined,
}

export function graphReducer(
    state = initialState,
    action: GraphActionTypes
): Graph {
    switch (action.type) {
        case SET_GRAPH:
            return {
                ...state,
                graphData: action.payload.graphData
        };
        default:
            return state;
    }
}