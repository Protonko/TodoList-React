import React, {useEffect, useRef, useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Checkbox from '@Components/Common/Checkbox';
import ButtonText from '@Components/Common/Buttons/ButtonText';
import ButtonAppend from '@Components/Common/Buttons/ButtonAppend';

function Modal(props) {
    const isEdit = props.editMode;
    const todoCard = props.todo;
    const checkboxes = todoCard.checkboxes;
    const [isClosing, setClosing] = useState(false);
    const [titleCard, setTitleCard] = useState(todoCard.title);
    const [descriptionCard, setDescriptionCard] = useState(todoCard.body);
    const [countCheckboxes, setCountCheckboxes] = useState(checkboxes.length);
    const refTitle = useRef(todoCard.title);
    const refDescription = useRef(todoCard.description);
    const animateModal = isClosing ? 'modal__overlay fade-out' : 'modal__overlay fade-in';

    function closeModal(event) {
        if (!event.target.closest('.button--save')
            && event.target.closest('.modal-area')) return;

        setClosing(true);
        setTimeout(() => props.modalShow(false), 200);
    }

    function saveChanges(event) {
        const position = todoCard.id - 1;
        const cardParams = {
            id: todoCard.id,
            title: refTitle.current.innerText,
            body: refDescription.current.innerText,
            checkboxes: checkboxes,
        };
        closeModal(event);
        props.changeTodo(position, cardParams);
    }

    function handleAppendCheckbox() {
        props.appendCheckbox(checkboxes);
        setCountCheckboxes(countCheckboxes + 1)
    }

    return (
        <div className={animateModal} onClick={closeModal}>
            <div className="modal-area slide-down">
                <h2 className="modal-area__title"
                    contentEditable={isEdit}
                    suppressContentEditableWarning={true}
                    ref={refTitle}
                >
                    {titleCard}
                </h2>

                <Scrollbars autoHide
                            autoHeight
                            autoHideDuration={500}
                            autoHeightMin={0}
                            autoHeightMax={250}
                            renderThumbVertical={props => <div {...props} className="scroll__thumb-vertical"/>}
                >
                    <div className="modal-area__body">
                        <p className="modal-area__descr"
                           contentEditable={isEdit}
                           suppressContentEditableWarning={true}
                           ref={refDescription}
                        >
                            {descriptionCard}
                        </p>

                        <div className="modal-area__block">
                            <div className="modal-area__checkbox-wrapper">
                                {checkboxes.map((elem, index) => (
                                    <Checkbox
                                        key={checkboxes[index].title + Math.random()}
                                        className="modal-area__checkbox-single"
                                        title={checkboxes[index].title}
                                        isEdit={isEdit}
                                        checkboxSingle={checkboxes[index]}
                                        />
                                ))}
                            </div>

                            {isEdit &&
                                <ButtonAppend title="Add new task" handleClick={handleAppendCheckbox} />
                            }
                        </div>

                    </div>
                </Scrollbars>

                {isEdit &&
                    <div className="button__container">
                        <ButtonText
                            text="Save"
                            handleClick={saveChanges}
                        />
                    </div>
                }

            </div>
        </div>
    )
}

export default Modal;