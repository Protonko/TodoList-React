import React, {Fragment, useEffect, useState} from 'react';
import InputEdit from '@Components/Common/Inputs/InputEdit';
import * as Constants from '@/static/constants';

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
            {props.isEdit
                ? (
                    <Fragment>
                        <InputEdit title={props.title} handleChange={handleChange} />
                        <a className="checkbox__remove"
                           href="#"
                           title={Constants.REMOVE_LINK_TITLE}
                           onClick={() => props.handleClickRemove(props.id)}
                        >
                            {Constants.CLOSE_SYMBOL}
                        </a>
                    </Fragment>
                )
                : (
                    <Fragment>
                        <input className="checkbox__input"
                               type="checkbox"
                               name="checkbox"
                               checked={checkboxSingle.completed}
                               onChange={() => props.handleComplete(checkboxSingle)}
                        />
                        <span className="checkbox__text">{props.title}</span>
                    </Fragment>
                )
            }
        </label>
    )
}

export default Checkbox;