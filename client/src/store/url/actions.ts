import { GET_URL, URL } from "./types";

export function getURL(url: URL) {
    return {
        type: GET_URL,
        payload: url
    }
}