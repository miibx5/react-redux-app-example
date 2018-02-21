
import { METHODS_CONSTANTS, TIPO_DOCUMENTO_CONSTANTS, TIPO_FAVORECIDO_CONSTANTS, DEFAULT_MASK_PATTERN } from "./fieldMaskConstants";

const INITIAL_STATE = {
    tipoFavorecido: "", nome: "", tipoDocumento: "", numeroDocumento: "", defaultMaskPattern: "",
    banco: "", agencia: "", conta: "", digito: "", telefone: "", email: "", showElements: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case METHODS_CONSTANTS.TIPO_FAVORECIDO_HANDLE_CHANGE:
            var showFields = action.payload === TIPO_FAVORECIDO_CONSTANTS.CONTA_EXTERNA;
            return { ...state, tipoFavorecido: action.payload, showElements: showFields }
            break;
        case METHODS_CONSTANTS.TIPO_DOCUMENTO_HANDLE_CHANGE:

            var mask = action.payload === TIPO_DOCUMENTO_CONSTANTS.CPF ? DEFAULT_MASK_PATTERN.MASK_CPF : DEFAULT_MASK_PATTERN.MASK_CNPJ;
            alert((action.payload === TIPO_DOCUMENTO_CONSTANTS.CPF) + " máscara: " + mask);
            return { ...state, tipoDocumento: action.payload, defaultMaskPattern: mask, numeroDocumento: "" }
            break;
        case METHODS_CONSTANTS.NOME_HANDLE_CHANGE:
            return { ...state, nome: action.payload }
            break;
        case METHODS_CONSTANTS.BANCO_HANDLE_CHANGE:
            return { ...state, banco: action.payload }
            break;
        case METHODS_CONSTANTS.AGENCIA_HANDLE_CHANGE:
            return { ...state, agencia: action.payload }
            break;
        case METHODS_CONSTANTS.NUMERO_DOCUMENTO_HANDLE_CHANGE:
            return { ...state, numeroDocumento: action.payload }
            break;
        case METHODS_CONSTANTS.CONTA_CHANGE_HANDLE_CHANGE:
            return { ...state, conta: action.payload }
            break;
        case METHODS_CONSTANTS.TELEFONE_HANDLE_CHANGE:
            return { ...state, telefone: action.payload }
            break;
        case METHODS_CONSTANTS.EMAIL_HANDLE_CHANGE:
            return { ...state, email: action.payload }
            break;
        case METHODS_CONSTANTS.DIGITO_HANDLE_CHANGE:
            return { ...state, digito: action.payload }
            break;
        default:
            return state;
            break;
    }
}