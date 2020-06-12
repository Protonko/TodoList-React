import React from 'react';

function ButtonText({ text, handleClick }) {
    return (
        <button className="button button--save" onClick={handleClick}>
            {text}
        </button>
    )
}

export default ButtonText;
