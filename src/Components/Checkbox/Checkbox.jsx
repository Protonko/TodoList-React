import React from 'react';

function Checkbox(props) {
    return (
        <label className="checkbox modal-area__checkbox-single">
            <input className="checkbox__input" type="checkbox" name="checkbox" />
            <span className="checkbox__text">{props.title}</span>
        </label>
    )
}

export default Checkbox;