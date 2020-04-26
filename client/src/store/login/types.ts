export interface Login {
    username: string;
    password: string;
}

export const GET_LOGIN = "GET_LOGIN";

interface GetLoginAction {
    type: typeof GET_LOGIN;
    payload: Login;
}

export type LoginActionTypes = GetLoginAction;