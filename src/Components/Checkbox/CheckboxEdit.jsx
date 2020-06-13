import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from '@static/constants';

import InputEdit from '@Components/Common/Inputs/InputEdit';

function CheckboxEdit({ title, handleRemove, handleInput }) {
    return (
        <>
            <InputEdit title={title} handleInput={handleInput} />
            <a className="checkbox__remove"
               href="#"
               title={Constants.REMOVE_LINK_TITLE}
               onClick={handleRemove}
            >
                {Constants.CLOSE_SYMBOL}
            </a>
        </>
    )
}

CheckboxEdit.propTypes = {
    title: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
}

export default CheckboxEdit;
