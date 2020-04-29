export interface Register {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const GET_REGISTER = "GET_REGISTER";

interface GetRegisterAction {
    type: typeof GET_REGISTER;
    payload: Register;
}

export type RegisterActionTypes = GetRegisterAction;