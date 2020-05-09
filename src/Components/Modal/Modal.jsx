import React, {useState} from 'react';

function Modal(props) {
    const todoCard = props.todo;
    const [isClosing, setClosing] = useState(false);
    const fadeOutModal = isClosing ? 'modal__overlay fade-out' : 'modal__overlay fade-in';

    function closeModal(event) {
        if (!event.target.closest('.modal-area'))
        setClosing(true);
        setTimeout(() => props.modalShow(false), 200);
    }

    return (
        <div className={fadeOutModal} onClick={closeModal}>
            <div className="modal-area slide-down">
                <h2 className="modal-area__title">
                    {todoCard.title}
                </h2>

                <div className="modal-area__body">
                    <p className="modal-area__descr">
                        {todoCard.body}
                    </p>
                    <div className="modal-area__checkbox-wrapper">
                        <label className="checkbox modal-area__checkbox-single">
                            <input className="checkbox__input" type="checkbox" name="checkbox" />
                            <span className="checkbox__text">Молоко</span>
                        </label>

                        <label className="checkbox modal-area__checkbox-single">
                            <input className="checkbox__input" type="checkbox" name="checkbox" />
                            <span className="checkbox__text">Хлеб</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;