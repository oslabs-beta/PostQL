export interface Auth {
    authed: boolean;
}

//add action types
export const CHECK_AUTH = "CHECK_AUTH";

interface CheckAuthAction {
    type: typeof CHECK_AUTH;
    payload: Auth
}

export type AuthActionTypes = CheckAuthAction;