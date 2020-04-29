export interface LogIn {
    username: string;
    password: string;
}

export const GET_LOGIN = "GET_LOGIN";

interface GetLoginAction {
    type: typeof GET_LOGIN;
    payload: LogIn;
}

export type LoginActionTypes = GetLoginAction;