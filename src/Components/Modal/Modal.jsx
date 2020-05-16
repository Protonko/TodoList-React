import React, {useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Checkbox from '@Components/Common/Checkbox';
import ButtonText from '@Components/Common/Buttons/ButtonText';
import ButtonAppend from '@Components/Common/Buttons/ButtonAppend';
import Description from '@Components/Modal/Description';
import Title from '@Components/Modal/Title';
import {func} from 'prop-types';

function Modal(props) {
    const isEdit = props.editMode;
    const todoCard = props.todo;
    const checkboxes = todoCard.checkboxes;
    const [isClosing, setClosing] = useState(false);
    const [titleCard, setTitleCard] = useState(todoCard.title);
    const [descriptionCard, setDescriptionCard] = useState(todoCard.body);
    const [countCheckboxes, setCountCheckboxes] = useState(checkboxes.length);
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
            title: titleCard,
            body: descriptionCard,
            checkboxes: checkboxes,
        };
        closeModal(event);
        props.changeTodo(position, cardParams);
    }

    function handleAppendCheckbox() {
        props.appendCheckbox(checkboxes);
        setCountCheckboxes(countCheckboxes + 1) // for rerender
    }

    function handleRemoveCheckbox(position) {
        props.removeCheckbox(checkboxes, position);
        setCountCheckboxes(countCheckboxes + 1) // for rerender
    }

    function handleComplete(checkbox) {
        const isCompleted = checkbox.completed;

    }

    return (
        <div className={animateModal} onClick={closeModal}>
            <div className="modal-area slide-down">
                <Title
                    isEdit={isEdit}
                    text={titleCard}
                    setTitleCard={setTitleCard}
                />

                <Scrollbars
                    autoHide
                    autoHeight
                    autoHideDuration={500}
                    autoHeightMin={0}
                    autoHeightMax={250}
                    renderThumbVertical={props => <div {...props} className="scroll__thumb-vertical" />}
                >
                    <div className="modal-area__body">
                        <Description
                            isEdit={isEdit}
                            text={descriptionCard}
                            setDescriptionCard={setDescriptionCard}
                        />

                        <div className="modal-area__block">
                            <div className="modal-area__checkbox-wrapper">
                                {checkboxes.map((elem, index) => (
                                    <Checkbox
                                        key={Math.random()}
                                        id={index}
                                        className="modal-area__checkbox-single"
                                        title={elem.title}
                                        isEdit={isEdit}
                                        checkboxSingle={elem}
                                        handleClickRemove={handleRemoveCheckbox}
                                        handleComplete={handleComplete}
                                    />
                                ))}
                            </div>

                            {isEdit &&
                                <ButtonAppend text="Add new task" handleClick={handleAppendCheckbox} />
                            }
                        </div>

                    </div>
                </Scrollbars>

                {isEdit &&
                    <div className="button__container">
                        <ButtonText text="Save" handleClick={saveChanges} />
                    </div>
                }

            </div>
        </div>
    )
}

export default Modal;