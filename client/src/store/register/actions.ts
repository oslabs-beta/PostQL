import { Register, GET_REGISTER } from "./types";

export function getLogin (register: Register) {
    return {
        type: GET_REGISTER,
        payload: register
    }
}