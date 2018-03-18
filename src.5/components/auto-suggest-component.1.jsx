import React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import Autosuggest, { ItemAdapter } from "react-bootstrap-autosuggest";


const states = [
    { abbr: 'AL', name: 'Alabama' },
    // $fold-start$
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    // $fold-end$
    { abbr: 'WY', name: 'Wyoming' }
].map((item, index) => ({
    ...item,
    // keep in source order to optimize sort by avoiding string comparison
    sortKey: index,
    // pre-calculate case-folded text representations
    textReps: [item.name.toLowerCase(), item.abbr.toLowerCase()]
}))

function mountArrayForCombo(array) {
    console.log("Array ", array);
    let newArray = array.map((item, index) => ({
        ...item,
        sortKey: index,
        textReps: [item.value, item.description]
    }));
    console.log("Array montado", newArray);
    return newArray;
}

class StateAdapter extends ItemAdapter {

    getTextRepresentations(item) {
        console.log("item montado", item);
        return item.textReps
    }
    renderItem(item) {
        return <div className="state-item">
            {item.value}<span className="abbrev">{item.descpription}</span>
        </div>
    }
}
StateAdapter.instance = new StateAdapter()

const AutosuggestComponent = props => (
    <FormGroup controlId="stateInput">
        <div className="pull-right">
            <small>
                {props.description}
            </small>
        </div>
        <ControlLabel>{props.label}</ControlLabel>
        {console.log("lista", mountArrayForCombo(props.list))}
        <Autosuggest
            datalist={states}
            placeholder="What is your favorite state or province?"
            value={props.value}
            itemAdapter={StateAdapter.instance}
            onChange={props.onChange}
            itemReactKeyPropName="value"
            itemValuePropName="description"
            onSelect={props.classNameonSelect} />
    </FormGroup>
);

export default AutosuggestComponent;