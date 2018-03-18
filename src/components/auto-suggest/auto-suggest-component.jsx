import React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import Autosuggest, { ItemAdapter } from "react-bootstrap-autosuggest";



function mountArrayForCombo(array) {
    let newArray = array.map((item, index) => ({
        ...item,
        sortKey: index,
        textReps: [item.value, item.description]
    }));
    return newArray;
}

class StateAdapter extends ItemAdapter {

    getTextRepresentations(item) {
        return item.textReps
    }
    renderItem(item) {
        return <div className="state-item">
            {item.value} - {item.description}
        </div>
    }
}
StateAdapter.instance = new StateAdapter()



const AutosuggestComponent = props => (
    <div>
        <ControlLabel>{props.label}</ControlLabel>
        <FormGroup controlId="stateInput">
            <Autosuggest
                datalist={mountArrayForCombo(props.list)}
                placeholder={props.placeholder}
                value={props.value}
                itemAdapter={StateAdapter.instance}
                datalistOnly={props.description}
                valueIsItem
                onChange={props.onChange}
                itemReactKeyPropName="value"
                itemValuePropName="description"
                onSelect={props.onSelect} />
        </FormGroup>
    </div>
);

export default AutosuggestComponent;