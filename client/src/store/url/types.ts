export interface URL {
    url: string
}

export const GET_URL = "GET_URL";

interface GetURLAction {
    type: typeof GET_URL;
    payload: URL;
}

export type URLActionTypes = GetURLAction;