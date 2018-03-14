
import { METHODS_CONSTANTS, TIPO_DOCUMENTO_CONSTANTS, TIPO_FAVORECIDO_CONSTANTS, DEFAULT_MASK_PATTERN } from "./fieldMaskConstants";

const INITIAL_STATE = {
    valueField: ""
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case METHODS_CONSTANTS.AUTO_SUGGEST_CHANGE_HANDLE:
            console.log("chegou no reducer e valor do payload é: ", action.payload);
            return { ...state, valueField: action.payload }
            break;

        default:
            return state;
            break;
    }
}