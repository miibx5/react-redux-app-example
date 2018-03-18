
import { METHODS_CONSTANTS, TIPO_DOCUMENTO_CONSTANTS, TIPO_FAVORECIDO_CONSTANTS, DEFAULT_MASK_PATTERN } from "./fieldConstants";

const INITIAL_STATE = {
    selectedAutoSuggest: "", selectedTypeHead: [""], selectedReactSelect: ""
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case METHODS_CONSTANTS.AUTO_SUGGEST_CHANGE_HANDLE:
            console.log("AUTO-SUGGEST chegou no reducer e valor do payload é: ", action.payload);
            return { ...state, selectedAutoSuggest: action.payload }
            break;
        case METHODS_CONSTANTS.TYPE_HEAD_HANDLE_CHANGE:
            console.log("TYPEHEAD chegou no reducer e valor do payload é: ", action.payload);
            return { ...state, selectedTypeHead: action.payload }
            break;
        case METHODS_CONSTANTS.REACT_SELECT_HANDLE_CHANGE:
            console.log("REACT SELECT chegou no reducer e valor do payload é: ", action.payload);
            return { ...state, selectedReactSelect: action.payload }
            break;

        default:
            return state;
            break;
    }
}