import { Auth, CHECK_AUTH } from "./types";

export function checkAuth (auth: Auth) {
    return {
        type: CHECK_AUTH,
        payload: auth
    }
}