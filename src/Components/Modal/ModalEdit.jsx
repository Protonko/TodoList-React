import React, { useState } from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {v4 as uuidv4} from 'uuid';
import useGlobal from '@store';
import * as Constants from '@static/constants';

import InputEdit from '@Components/Common/Inputs/InputEdit';
import Textarea from '@Components/Common/Inputs/Textarea';
import ButtonText from '@Components/Common/Buttons/ButtonText';
import ButtonAppend from '@Components/Common/Buttons/ButtonAppend';
import Checkbox from '@Components/Checkbox/Checkbox';

function ModalEdit() {
    const [globalState, globalActions] = useGlobal();
    const currentTodo = globalState.todos.filter(elem => elem.id === globalState.currentTodoId)[0];
    const currentTodoCheckboxes = globalState.checkboxes.filter(elem => elem.idCard === globalState.currentTodoId);

    const [titleCard, setTitleCard] = useState(currentTodo.title);
    const [descriptionCard, setDescriptionCard] = useState(currentTodo.body);

    function saveChanges() {
        currentTodo.title = titleCard;
        currentTodo.body = descriptionCard;
        globalActions.todoCards.setCurrentTodoId(null);
    }

    function appendCheckbox() {
        const checkbox = {
            id: uuidv4(),
            idCard: globalState.currentTodoId,
            title: '',
            completed: false,
        };

        globalActions.checkboxes.addCheckbox(checkbox)
    }

    function renderCheckbox(elem) {
      return (
        <Checkbox
          key={elem.id}
          className="modal-area__checkbox-single"
          id={elem.id}
        />
      );
    }

    return (
        <>
            <InputEdit
                className="modal-area__title"
                title={currentTodo.title}
                handleInput={event => setTitleCard(event.target.textContent)}
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
                    <Textarea
                        handleInput={event => setDescriptionCard(event.target.value)}
                        title={currentTodo.body}
                    />

                    <div className="modal-area__block">
                        <div className="modal-area__checkbox-wrapper">
                            {currentTodoCheckboxes.map(renderCheckbox)}
                        </div>

                        <ButtonAppend
                            text={Constants.APPEND_CHECKBOX_BUTTON_TITLE}
                            handleClick={appendCheckbox}
                        />
                    </div>

                </div>
            </Scrollbars>

            <div className="button__container">
               <ButtonText text={Constants.BUTTON_SAVE_TITLE} handleClick={saveChanges} />
            </div>
        </>
    );
}

export default ModalEdit;
