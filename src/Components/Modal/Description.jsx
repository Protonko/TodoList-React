import React, {Fragment, useEffect, useState} from 'react';
import Textarea from '@Components/Common/Inputs/Textarea';

function Description(props) {
    const MIN_HEIGHT = 105;
    const [currentHeight, setCurrentHeight] = useState(MIN_HEIGHT);

    function handleChange(event) {
        props.setDescriptionCard(event.target.value);
        const currentHeight = event.target ? event.target.scrollHeight : MIN_HEIGHT;
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