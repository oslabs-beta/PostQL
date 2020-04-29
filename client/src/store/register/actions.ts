import { Register, GET_REGISTER } from "./types";

export function getRegister (register: Register) {
    return {
        type: GET_REGISTER,
        payload: register
    }
}