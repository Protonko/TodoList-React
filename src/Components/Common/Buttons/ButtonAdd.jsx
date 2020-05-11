import React from 'react';

import addIcon from '@/assets/icons/svg/plus.svg';

function ButtonAdd() {
    return (
        <button className="button button--add add-todo__button">
            <svg className="icon--square_10 icon--red add-todo__button-icon">
                <use xlinkHref={addIcon}></use>
            </svg>
            <span className="add-todo__button-text">Add</span>
        </button>
    )
}

export default ButtonAdd;