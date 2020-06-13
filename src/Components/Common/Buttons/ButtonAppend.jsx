import React from 'react';
import PropTypes from 'prop-types';
import addIcon from '@/assets/icons/svg/plus.svg';

function ButtonAppend({ text, handleClick }) {
    return (
        <button className="button button--opacity" onClick={handleClick}>
            <svg className="icon--square_10 icon--red add-todo__button-icon">
                <use xlinkHref={addIcon}></use>
            </svg>
            <span className="add-todo__button-text">
                {text}
            </span>
        </button>
    )
}

ButtonAppend.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default ButtonAppend;
