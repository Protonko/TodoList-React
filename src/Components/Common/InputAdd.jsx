import React from 'react';

function InputAdd(props) {
    return (
        <input
            className="input input--add add-todo__input"
            type="text"
            {...props.params}
            placeholder={props.placeholder}
        />
    )
}

export default InputAdd;