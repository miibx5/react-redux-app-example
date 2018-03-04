import { METHODS_CONSTANTS } from "./fieldMaskConstants";


export function tipoFavorecidoHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.TIPO_FAVORECIDO_HANDLE_CHANGE,
        payload: e.target.value
    }
}
export function nomeHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.NOME_HANDLE_CHANGE,
        payload: e.target.value
    }
}
export function tipoDocumentoHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.TIPO_DOCUMENTO_HANDLE_CHANGE,
        payload: e.target.value
    }
}
export function numeroDocumentoHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.NUMERO_DOCUMENTO_HANDLE_CHANGE,
        payload: e.target.value
    }
}

export function bancoHandleChange(e) {
    // alert("Chegou na action");
    console.log(e);
    return {
        type: METHODS_CONSTANTS.BANCO_HANDLE_CHANGE,
        payload: e
    }
}
export function agenciaHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.AGENCIA_HANDLE_CHANGE,
        payload: e.target.value
    }
}
export function contaHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.CONTA_CHANGE_HANDLE_CHANGE,
        payload: e.target.value
    }
}
export function digitoHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.DIGITO_HANDLE_CHANGE,
        payload: e.target.value
    }
}
export function telefoneHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.TELEFONE_HANDLE_CHANGE,
        payload: e.target.value
    }
}
export function emailHandleChange(e) {
    return {
        type: METHODS_CONSTANTS.EMAIL_HANDLE_CHANGE,
        payload: e.target.value
    }
}  