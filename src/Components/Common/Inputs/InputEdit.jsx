import React from 'react';
import PropTypes from 'prop-types';

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

InputEdit.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleInput: PropTypes.func.isRequired,
}

export default InputEdit;
