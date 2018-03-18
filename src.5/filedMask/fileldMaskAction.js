import { METHODS_CONSTANTS } from "./fieldMaskConstants";


export function autoSuggestChangeHandle(value) {
    console.log("valor da variável", value);
    return {
        type: METHODS_CONSTANTS.AUTO_SUGGEST_CHANGE_HANDLE,
        payload: value
    }
}
