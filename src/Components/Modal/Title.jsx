import React, {Fragment} from 'react';
import InputEdit from '@Components/Common/Inputs/InputEdit';
import Textarea from '@Components/Common/Inputs/Textarea';

function Title(props) {

    function handleChange(event) {
        props.setTitleCard(event.target.value);
    }

    return (
        <Fragment>
            {props.isEdit
                ? <InputEdit className="modal-area__title" title={props.text} handleChange={handleChange} />
                : <h2 className="modal-area__title">{props.text}</h2>
            }
        </Fragment>
    )
}

export default Title;