import { 
    LogIn,
    LoginActionTypes,
    GET_LOGIN
} from "./types";

const initialState: LogIn = {
    username: '',
    password: ''
}

export function loginReducer(
    state = initialState,
    action: LoginActionTypes
): LogIn {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                ...action.payload
        };
        default:
            return state;
    }
}