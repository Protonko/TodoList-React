import React from 'react';
import PropTypes from 'prop-types';

function CheckboxView({ title, completed, handleChange }) {
    return (
        <>
            <input className="checkbox__input"
                   type="checkbox"
                   name="checkbox"
                   checked={completed}
                   onChange={handleChange}
            />
            <span className="checkbox__text">{title}</span>
        </>
    )
}

CheckboxView.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default CheckboxView;
