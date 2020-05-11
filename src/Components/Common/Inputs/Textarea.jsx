import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

function Textarea(props) {

    return (
        <div className="modal-area__textarea">
            <Scrollbars
                className="scroll__area"
                autoHide
                autoHeight
                autoHideDuration={500}
                autoHeightMin={0}
                autoHeightMax={150}
                renderThumbVertical={props => <div {...props} className="scroll__thumb-vertical"/>}
            >
                <textarea
                    className="input input--area"
                    style={{height: props.currentHeight}}
                    type="text"
                    defaultValue={props.title}
                    onChange={props.handleChange}
                />
            </Scrollbars>
        </div>
    )
}

export default Textarea;