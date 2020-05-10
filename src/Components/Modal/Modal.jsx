import React, {useRef, useState} from 'react';
import Checkbox from '@Components/Checkbox/Checkbox';

function Modal(props) {
    const todoCard = props.todo;
    const [isClosing, setClosing] = useState(false);
    const [titleCard, setTitleCard] = useState(todoCard.title);
    const refTitle = useRef(todoCard.title);
    const refDescription = useRef(todoCard.description);
    const [descriptionCard, setDescriptionCard] = useState(todoCard.body);
    const animateModal = isClosing ? 'modal__overlay fade-out' : 'modal__overlay fade-in';
    const isEdit = props.editMode;

    function closeModal(event) {
        if (!event.target.closest('.button--save')
            && event.target.closest('.modal-area')) return;

        setClosing(true);
        setTimeout(() => props.modalShow(false), 200);
    }

    function saveChanges(event) {
        event.preventDefault();
        const position = todoCard.id - 1;
        const cardParams = {
            id: todoCard.id,
            title: refTitle.current.innerText,
            body: refDescription.current.innerText,
        };
        closeModal(event);
        props.changeTodo(position, cardParams);
    }

    return (
        <div className={animateModal} onClick={closeModal}>
            <form className="modal-area slide-down" onSubmit={saveChanges}>
                <h2 className="modal-area__title"
                    contentEditable={isEdit}
                    suppressContentEditableWarning={true}
                    ref={refTitle}
                >
                    {titleCard}
                </h2>

                <div className="modal-area__body">
                    <p className="modal-area__descr"
                       contentEditable={isEdit}
                       suppressContentEditableWarning={true}
                       ref={refDescription}
                    >
                        {descriptionCard}
                    </p>
                    <div className="modal-area__checkbox-wrapper">
                        <Checkbox title="Молоко" />
                        <Checkbox title="Хлеб" />
                    </div>
                </div>

                {isEdit &&
                    <div className="button__container">
                        <button className="button button--save">
                            Save
                        </button>
                    </div>
                }

            </form>
        </div>
    )
}

export default Modal;