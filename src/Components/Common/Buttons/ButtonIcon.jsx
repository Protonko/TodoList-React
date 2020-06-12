import React from 'react';

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

export default ButtonView;
