import React, {Fragment, useEffect, useState} from 'react';
import Textarea from '@Components/Common/Inputs/Textarea';
import * as Constants from '@/static/constants';

function Description(props) {
    const [currentHeight, setCurrentHeight] = useState(Constants.MIN_HEIGHT_TEXTAREA);

    function handleChange(event) {
        props.setDescriptionCard(event.target.value);
        const currentHeight = event.target ? event.target.scrollHeight : Constants.MIN_HEIGHT_TEXTAREA;
        setCurrentHeight(currentHeight)
    }

    return (
        <Fragment>
            {props.isEdit
                ? <Textarea currentHeight={currentHeight} title={props.text} handleChange={handleChange} />
                : <p className="modal-area__descr">{props.text}</p>
            }
        </Fragment>
    )
}

export default Description;