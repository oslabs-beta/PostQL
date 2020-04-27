import { LogIn, GET_LOGIN } from "./types";

export function getLogin (log: LogIn) {
    return {
        type: GET_LOGIN,
        payload: log
    }
}