import React, {useState} from 'react';
import InputEdit from '@Components/Common/InputEdit';

function Checkbox(props) {
    const [value, setValue] = useState(props.title);
    const checkboxSingle = props.checkboxSingle;

    function handleChange(event) {
        setValue(event.target.value);
        checkboxSingle.title = value;
    }

    return (
        <label className={`checkbox ${props.className}`}>
            <input className="checkbox__input" type="checkbox" name="checkbox" />
            {props.isEdit
                ? <InputEdit title={props.title} handleChange={handleChange} />
                : <span className="checkbox__text">{props.title}</span>
            }
        </label>
    )
}

export default Checkbox;