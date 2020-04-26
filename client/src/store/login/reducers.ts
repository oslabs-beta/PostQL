import { 
    Login,
    LoginActionTypes,
    GET_LOGIN
} from "./types";

const initialState: Login = {
    username: '',
    password: ''
}

export function loginReducer(
    state = initialState,
    action: LoginActionTypes
): Login {
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