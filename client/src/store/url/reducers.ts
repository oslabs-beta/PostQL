import { 
    URL,
    URLActionTypes,
    GET_URL
} from "./types";

const initialState: URL = {
    url: ''
}

export function urlReducer(
    state = initialState,
    action: URLActionTypes
): URL {
    switch (action.type) {
        case GET_URL:
            return {
                ...state,
                ...action.payload
        };
        default:
            return state;
    }
}

