import React from 'react';

import addIcon from '@/assets/icons/svg/plus.svg';

function ButtonAppend(props) {
    return (
        <button className="button button--opacity" onClick={props.handleClick}>
            <svg className="icon--square_10 icon--red add-todo__button-icon">
                <use xlinkHref={addIcon}></use>
            </svg>
            <span className="add-todo__button-text">
                {props.text}
            </span>
        </button>
    )
}

export default ButtonAppend;