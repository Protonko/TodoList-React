import React, {Fragment, useEffect, useState} from 'react';
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
        <label className={`checkbox ${props.className}`} data-checkbox-id={props.id}>
            <input className="checkbox__input"
                   type="checkbox"
                   name="checkbox"
                   onChange={() => props.handleComplete(checkboxSingle)}
            />
            {props.isEdit
                ? (
                    <Fragment>
                        <InputEdit title={props.title} handleChange={handleChange} />
                        <a className="checkbox__remove"
                           href="#"
                           title="Remove item"
                           onClick={() => props.handleClickRemove(props.id)}
                        >
                            &times;
                        </a>
                    </Fragment>
                )
                : <span className="checkbox__text">{props.title}</span>
            }
        </label>
    )
}

export default Checkbox;