import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap';
import { BANCOS } from "./bancos";
import {
    autoSuggestChangeHandle
} from "./fileldMaskAction";

import AutoSuggestComponent from "../components/auto-suggest-component";
//import TestSuggest from "../components/teste-auto-suggest-component";




var buttonStyle = {
    float: "right"
}

const FieldMask = props => (
    <div className="panel panel-default">
        <div className="row">
            <div className="col-md-12">
                <br />
                <div className="panel panel-default">
                    <div className="panel-heading fundo-azul-claro">Cadastro</div>
                    <div className="panel-body">
                        <div id="frmSalvarFavorecido">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Opções do Favorecido</label>
                                        <FormControl id="tipoFavorecido" componentClass="select" placeholder="Selecione"
                                            value={props.field.tipoFavorecido} onChange={props.tipoFavorecidoHandleChange}>
                                            <option value={-1} defaultValue>Selecione</option>
                                            <option value={TIPO_FAVORECIDO_CONSTANTS.CONTA_INTERNA}>Banco 1</option>
                                            <option value={TIPO_FAVORECIDO_CONSTANTS.CONTA_EXTERNA}>Banco 2</option>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <FormGroup controlId="browserInput" bsSize="small" >
                                        <ControlLabel>Bancos</ControlLabel>
                                        <Autosuggest
                                            datalist={BANCOS}
                                            placeholder="What browser do you use?"
                                            value={props.field.banco}
                                            onChange={props.bancoHandleChange}
                                            bsSize="small" />
                                    </FormGroup>
                                </div>
                                <div className="col-md-3">
                                    {/*  <DayPicker value={props.field.selectedDay}
                                        onDayClick={props.handleDayClick} /> */}

                                    <DayPickerInput
                                        selected={props.field.selectedDay}
                                        onDayChange={props.handleDayClick}
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        placeholder="DD/MM/YYYY"
                                    /* dayPickerProps={{
                                        locale: "pt-br"
                                    }} */
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <label>Nome</label>
                                    <FormControl id="nome" type="text" />
                                </div>
                                {
                                    props.field.showElements ?
                                        <div style={{ paddingTop: "1.7em" }}>
                                            <div className="col-sm-2">
                                                <FormControl id="tipoDocumento" componentClass="select" placeholder="Selecione"
                                                    value={props.field.tipoDocumento} onChange={props.tipoDocumentoHandleChange}>

                                                    <option value={-1} defaultValue>Selecione</option>
                                                    <option value={TIPO_DOCUMENTO_CONSTANTS.CPF}>CPF</option>
                                                    <option value={TIPO_DOCUMENTO_CONSTANTS.CNPJ}>CNPJ</option>
                                                </FormControl>
                                            </div>
                                            < div className="col-sm-2">
                                                <InputMask id="numeroDocumento" className="form-control"
                                                    value={props.field.numeroDocumento} onChange={props.numeroDocumentoHandleChange}
                                                    mask={props.field.defaultMaskPattern} maskChar="" size={14} />
                                            </div>
                                        </div>
                                        : null
                                }
                            </ div>

                            <div className="row">
                                {
                                    props.field.showElements ?
                                        <div className="col-sm-4">
                                            <label>Banco</label>
                                            <FormControl id="banco" type="text" className="form-control"
                                                value={props.field.banco} onChange={props.bancoHandleChange} />
                                        </div>
                                        : null
                                }
                            </ div>

                            <div className="row">

                                <div className="col-sm-4">
                                    <label>Agência</label>
                                    <FormControl id="agencia" type="text"
                                        value={props.field.agencia} onChange={props.agenciaHandleChange} />
                                </div>
                                <div className="col-sm-2">
                                    <label>Conta</label>
                                    <FormControl id="conta" type="text" />
                                </div>

                                {
                                    props.field.showElements ?
                                        <div className="col-sm-2">
                                            <label>Dígito</label>
                                            <input id="digito" type="text" className="form-control"
                                                value={props.field.digito} onChange={props.digitoHandleChange} />
                                        </div>
                                        : null
                                }
                            </ div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <label>Celular</label>
                                    <FormControl id="telelfone" type="text"
                                        value={props.field.telefone} onChange={props.telefoneHandleChange} />
                                </div>

                                <div className="col-sm-4">
                                    <label>Email</label>
                                    <FormControl id="email" type="text"
                                        value={props.field.email} onChange={props.emailHandleChange} />
                                </div>
                            </ div>

                            <div className="row" style={buttonStyle}>
                                <div className="col-sm-8" >
                                    <Button className="info"  >Salvar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({ field: state.fieldMask })
const mapDispatchToProps =
    dispatch => bindActionCreators(
        {
            autoSuggestChangeHandle
        }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FieldMask);