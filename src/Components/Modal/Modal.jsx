import React from 'react';

function Modal(props) {
    const todoCard = props.todo;
    return (
        <div className="modal__overlay" onClick={() => props.modalShow(false)}>
            <div className="modal-area">
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