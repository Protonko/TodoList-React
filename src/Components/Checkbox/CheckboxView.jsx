import React from 'react';

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

export default CheckboxView;
