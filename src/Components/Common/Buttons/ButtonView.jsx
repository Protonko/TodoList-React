import viewIcon from '@/assets/icons/svg/eye.svg';
import React from 'react';

function ButtonView(props) {
    return (
        <button
            className="button button--cicrle"
            onClick={props.handleClick}
        >
            <svg className="icon--square_15 icon--red">
                <use xlinkHref={viewIcon}></use>
            </svg>
        </button>
    )
}

export default ButtonView;