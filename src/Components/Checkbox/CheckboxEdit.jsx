import React from 'react';
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

export default CheckboxEdit;
