import React from 'react';

function InputAdd({ params, placeholder }) {
    return (
        <input
            className="input input--add add-todo__input"
            type="text"
            {...params}
            placeholder={placeholder}
        />
    )
}

export default InputAdd;
