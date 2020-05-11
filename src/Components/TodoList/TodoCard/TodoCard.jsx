import React, {useEffect, useState} from 'react';
import ButtonEdit from '@Components/Common/Buttons/ButtonEdit';
import ButtonView from '@Components/Common/Buttons/ButtonView';

function TodoCard(props) {
    const [cropTitle, setCropTitle] = useState(props.title);
    const [cropDescription, setCropDescription] = useState(props.description);

    useEffect(() => {
        setCropTitle(props.title);
        setCropDescription(props.description);
        cropText();
    }, [props.title, props.description]);

    function showModalWithParams(isEdit) { // isEdit = true || false
        props.modalShow(props.id);
        props.setEditMode(isEdit);
    }

    function cropText() {
        const size = { // max size text
            title: 30,
            description: 200,
        };
        const description = props.description;
        const title = props.title;

        if (title.length > size.title) setCropTitle(props.title.slice(0, size.title) + '...');
        if (description.length > size.description) setCropDescription(props.description.slice(0, size.description) + '...');
    }

    return (
        <article className="todo-card" id={props.id}>
            <div className="todo-card__border" />
            <h6 className="todo-card__title">
                {cropTitle}
            </h6>
            <p className="todo-card__descr">
                {cropDescription}
            </p>
            <div className="todo-card__button-container">
                <ButtonEdit handleClick={() => showModalWithParams(true)} />
                <ButtonView  handleClick={() => showModalWithParams(false)} />
        </div>
        </article>
    )
}

export default TodoCard;