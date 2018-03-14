import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap';
import { BANCOS } from "./bancos";
import {
    autoSuggestChangeHandle
} from "./fileldMaskAction";

import AutoSuggestComponent from "../components/auto-suggest-component";





var buttonStyle = {
    float: "right"
}

const FieldMask = props => (
    <div>
        <h1>TESTE DO CAMPO AUTO SUGGEST</h1>
        <AutoSuggestComponent label="teste" list={BANCOS} value={props.valueField} onChange={props.autoSuggestChangeHandle} />
    </div>
);

const mapStateToProps = state => ({ field: state.fieldMask })
const mapDispatchToProps =
    dispatch => bindActionCreators(
        {
            autoSuggestChangeHandle
        }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FieldMask);