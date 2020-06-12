import React, { useState } from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import * as Constants from '@static/constants';

function Textarea({ title, handleInput }) {
    const [currentHeight, setCurrentHeight] = useState(Constants.MIN_HEIGHT_TEXTAREA);

    function handleChange(event) {
        handleInput(event);
        resizeTextarea(event);
    }

    function resizeTextarea(event) {
        const currentHeight = event.target ? event.target.scrollHeight : Constants.MIN_HEIGHT_TEXTAREA;

        setCurrentHeight(currentHeight);
    }

    return (
        <div className="modal-area__textarea">
            <Scrollbars
                className="scroll__area"
                autoHide
                autoHeight
                autoHideDuration={500}
                autoHeightMin={0}
                autoHeightMax={150}
                renderThumbVertical={props => <div {...props} className="scroll__thumb-vertical" />}
            >
                <textarea
                    className="input input--area"
                    style={{height: currentHeight}}
                    placeholder={Constants.CREATED_CARD_TITLE}
                    defaultValue={title}
                    onChange={handleChange}
                />
            </Scrollbars>
        </div>
    )
}

export default Textarea;
