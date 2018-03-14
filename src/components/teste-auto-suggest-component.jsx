import Autosuggest, { TagAdapter } from 'react-bootstrap-autosuggest';
import React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

const predefinedTags = [
    { value: 'Good', img: 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f607.png' },
    { value: 'Evil', img: 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f608.png' },
    { value: 'Confused', img: 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f615.png' },
    { value: 'Ugly', img: 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/png/1f4a9.png' }
]

class TagAdapter extends ItemAdapter {
    newFromValue(value) {
        return { value }
    }
    renderSelected(item) {
        return <div className="tag">
            {item.value} {item.img && <img src={item.img} />}
        </div>
    }
    renderSuggested(item) {
        return <div className="tag-item">
            {item.img && <img src={item.img} />} {item.value}
        </div>
    }
}
TagAdapter.instance = new TagAdapter()

class TestSuggest extends Component {
    render({
        tags, allowDuplicates, datalistOnly, multiLine, bsSize, onChange, onClear }) {
        return <FormGroup id="tagInput" controlId="tagInput" bsSize={bsSize}>
            <ControlLabel>Tags</ControlLabel>
            <Autosuggest
                bsSize={bsSize}
                datalist={predefinedTags}
                datalistOnly={datalistOnly}
                multiple
                allowDuplicates={allowDuplicates}
                placeholder="Pick some tags..."
                value={tags}
                itemAdapter={TagAdapter.instance}
                buttonAfter={!multiLine && <Button onClick={onClear}>&times;</Button>}
                showToggle={!multiLine}
                onChange={onChange} />
        </FormGroup>
    }
}

export default TestSuggest;