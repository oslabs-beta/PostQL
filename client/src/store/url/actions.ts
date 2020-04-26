import { URL, GET_URL } from "./types";

export function getURL(url: URL) {
    return {
        type: GET_URL,
        payload: url
    }
}