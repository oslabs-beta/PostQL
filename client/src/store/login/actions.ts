import { Login, GET_LOGIN } from "./types";

export function getLogin (login: Login) {
    return {
        type: GET_LOGIN,
        payload: login
    }
}