import React, { useEffect, useState } from 'react';
import editIcon from '@/assets/icons/svg/pencil.svg';
import viewIcon from '@/assets/icons/svg/eye.svg';

function TodoCard(props) {
    const [title, cropTitle] = useState(props.title);
    const [description, cropDescription] = useState(props.description);

    useEffect(() => cropText(), []);

    function showModalWithParams(isEdit) { // isEdit = true || false
        props.modalShow(props.id);
        props.setEditMode(isEdit);
    }

    function cropText() {
        const size = {
            title: 30,
            description: 200,
        };
        const description = props.description;
        const title = props.title;

        if (title.length > size.title) cropTitle(title.slice(0, size.title) + '...');
        if (description.length > size.description) cropDescription(description.slice(0, size.description) + '...');
    }

    return (
        <article className="todo-card" id={props.id}>
            <div className="todo-card__border" />
            <h6 className="todo-card__title">
                {title}
            </h6>
            <div className="todo-card__descr">
                {description}
            </div>
            <div className="todo-card__button-container">
                <button
                    className="button button--cicrle"
                    onClick={() => showModalWithParams(true)}
                >
                    <svg className="icon--square_15 icon--red">
                        <use xlinkHref={editIcon}></use>
                    </svg>
                </button>
                <button
                    className="button button--cicrle"
                    onClick={() => showModalWithParams(false)}
                >
                    <svg className="icon--square_15 icon--red">
                        <use xlinkHref={viewIcon}></use>
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default TodoCard;