import editIcon from '@/assets/icons/svg/pencil.svg';
import React from 'react';

function ButtonEdit(props) {
    return (
        <button
            className="button button--cicrle"
            onClick={props.handleClick}
        >
            <svg className="icon--square_15 icon--red">
                <use xlinkHref={editIcon}></use>
            </svg>
        </button>
    )
}

export default ButtonEdit;