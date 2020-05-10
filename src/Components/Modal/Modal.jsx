import React, {useState} from 'react';
import Checkbox from '@Components/Checkbox/Checkbox';

function Modal(props) {
    const todoCard = props.todo;
    const [isClosing, setClosing] = useState(false);
    const animateModal = isClosing ? 'modal__overlay fade-out' : 'modal__overlay fade-in';
    console.log(props.editMode)

    function closeModal(event) {
        if (event.target.closest('.modal-area')) return;
        setClosing(true);
        setTimeout(() => props.modalShow(false), 200);
    }

    return (
        <div className={animateModal} onClick={closeModal}>
            <div className="modal-area slide-down">
                <h2 className="modal-area__title"
                    contentEditable={props.editMode}
                    suppressContentEditableWarning={true}
                >
                    {todoCard.title}
                </h2>

                <div className="modal-area__body">
                    <p className="modal-area__descr"
                       contentEditable={props.editMode}
                       suppressContentEditableWarning={true}
                    >
                        {todoCard.body}
                    </p>
                    <div className="modal-area__checkbox-wrapper">
                        <Checkbox title="Молоко" />
                        <Checkbox title="Хлеб" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;