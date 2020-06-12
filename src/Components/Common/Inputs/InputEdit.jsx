import React from 'react';

function InputEdit({className, title, handleInput}) {
    const classNames = className ? className : '';

    return (
        <span contentEditable={true}
              className={`input input--editable ${classNames}`}
              suppressContentEditableWarning={true}
              onInput={handleInput}
        >
            {title}
        </span>
    )
}

export default InputEdit;
