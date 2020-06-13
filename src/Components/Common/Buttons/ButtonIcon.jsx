import React from 'react';
import PropTypes from 'prop-types';

function ButtonView({ icon, handleClick }) {
    return (
        <button
            className="button button--cicrle"
            onClick={handleClick}
        >
            <svg className="icon--square_15 icon--red">
                <use xlinkHref={icon}></use>
            </svg>
        </button>
    )
}

ButtonView.propTypes = {
    icon: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}


export default ButtonView;
