import React from 'react';

function ButtonText(props) {
    return (
        <button className="button button--save" onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

export default ButtonText;