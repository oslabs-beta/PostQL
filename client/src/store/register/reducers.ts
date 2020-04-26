import { 
    Register,
    RegisterActionTypes,
    GET_REGISTER
} from "./types";

const initialState: Register = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export function registerReducer(
    state = initialState,
    action: RegisterActionTypes
): Register {
    switch (action.type) {
        case GET_REGISTER:
            return {
                ...state,
                ...action.payload
        };
        default:
            return state;
    }
}