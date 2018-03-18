import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ControlLabel, FormControl, FormGroup, Button } from "react-bootstrap";
import { autoSuggestChangeHandle, typeHeadHandleChange, reactSelectHandleChange } from "./fieldAction";
import AutoSuggestComponent from "../auto-suggest/auto-suggest-component";
import TypeHeadComponent from "../typehead/typehead-field";
import typeaheadData from "../../data/example-data"
import { BANCOS } from "../../data/bancos";


class Field extends Component {
    render() {
        return (
            <div>
                <h1>TESTE DE CAMPOS AUTO COMPLETES</h1>
                <AutoSuggestComponent label="React Bootstrap Auto Suggest" list={BANCOS}
                    value={this.props.stateField.selectedAutoSuggest} onChange={this.props.autoSuggestChangeHandle} />
                {console.log("Auto Suggest selecionado na tela====>", this.props.stateField.selectedAutoSuggest)}
                <br />
                <br />

                <TypeHeadComponent
                    placeholder="Choose a state..."
                    label="TypeHead Field"
                    labelKey="name"
                    selectd={this.props.stateField.typeHeadField}
                    data={typeaheadData}
                    onChange={this.props.typeHeadHandleChange}
                />
                {console.log("TypeHead selecionado na tela====>", this.props.stateField.selectdTypehead)}
                <br />
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => ({ stateField: state.field })
const mapDispatchToProps =
    dispatch => bindActionCreators({
        autoSuggestChangeHandle, typeHeadHandleChange, reactSelectHandleChange
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Field);