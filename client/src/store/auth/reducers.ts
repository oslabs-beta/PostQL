import {
    Auth,
    AuthActionTypes,
    CHECK_AUTH
} from "./types";

const initialState: Auth = {
    authed: false
}

export function authReducer(
    state = initialState,
    action: AuthActionTypes
): Auth {
    switch (action.type) {
        case CHECK_AUTH:
            return {

        };
        default:
            return state;
    }
}