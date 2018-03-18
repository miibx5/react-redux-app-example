import { METHODS_CONSTANTS } from "./fieldConstants";

export function autoSuggestChangeHandle(value) {
    return {
        type: METHODS_CONSTANTS.AUTO_SUGGEST_CHANGE_HANDLE,
        payload: value
    }
}
export function typeHeadHandleChange(value) {
    return {
        type: METHODS_CONSTANTS.TYPE_HEAD_HANDLE_CHANGE,
        payload: value
    }
}
export function reactSelectHandleChange(value) {
    return {
        type: METHODS_CONSTANTS.REACT_SELECT_HANDLE_CHANGE,
        payload: value
    }
}
