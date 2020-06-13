import React from 'react';
import PropTypes from 'prop-types';

function ButtonText({ text, handleClick }) {
    return (
        <button className="button button--save" onClick={handleClick}>
            {text}
        </button>
    )
}

ButtonText.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default ButtonText;
