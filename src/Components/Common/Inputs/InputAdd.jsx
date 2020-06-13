import React from 'react';
import PropTypes from 'prop-types';

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

InputAdd.propTypes = {
    params: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default InputAdd;
