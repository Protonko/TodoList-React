import React from 'react';

function InputEdit(props) {
    return (
        <input className={`input input--edit ${props.className}`} type="text" defaultValue={props.title} onChange={props.handleChange} />
    )
}

export default InputEdit;