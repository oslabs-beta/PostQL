import { Inst, SET_INSTANCE } from "./types";

export function setInstance (query: Inst) {
    return {
        type: SET_INSTANCE,
        payload: query
    }
}