import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

const TypeHeadComponent = props => (
    <div>
        <ControlLabel>{props.label}</ControlLabel>
        <FormGroup>
            <Typeahead
                placeholder={props.placeholder}
                labelKey={props.labelKey}
                selected={props.selected}
                options={props.data}
                onChange={props.onChange}
            />
        </FormGroup>
    </div>
);

export default TypeHeadComponent;
