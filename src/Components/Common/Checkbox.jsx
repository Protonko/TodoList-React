import React, {useEffect, useState} from 'react';
import InputEdit from '@Components/Common/Inputs/InputEdit';

function Checkbox(props) {
    const [valueCheckbox, setValueCheckbox] = useState(props.title);
    const checkboxSingle = props.checkboxSingle;

    useEffect(() => {
        checkboxSingle.title = valueCheckbox;
    }, [valueCheckbox]);

    function handleChange(event) {
        setValueCheckbox(event.target.value);
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