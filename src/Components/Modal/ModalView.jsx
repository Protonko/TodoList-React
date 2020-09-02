import React from 'react';
import useGlobal from '@/store';
import {Scrollbars} from 'react-custom-scrollbars';

import ButtonText from '@Components/Common/Buttons/ButtonText';
import Checkbox from '@Components/Checkbox/Checkbox';
import * as Constants from '@/static/constants';

function ModalView() {
    const [globalState, globalActions] = useGlobal();
    const currentTodo = globalState.todos.filter(elem => elem.id === globalState.currentTodoId)[0];
    const currentTodoCheckboxes = globalState.checkboxes.filter(elem => elem.idCard === globalState.currentTodoId);

    function removeTodo() {
        globalActions.todoCards.setCurrentTodoId(null);
        globalActions.todoCards.removeTodo(currentTodo.id);
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
            <h2 className="modal-area__title">
                {currentTodo.title}
            </h2>

            <Scrollbars
                autoHide
                autoHeight
                autoHideDuration={500}
                autoHeightMin={0}
                autoHeightMax={250}
                renderThumbVertical={props => <div {...props} className="scroll__thumb-vertical" />}
            >
                <div className="modal-area__body">
                    <p className="modal-area__descr">
                        {currentTodo.body}
                    </p>

                    <div className="modal-area__block">
                        <div className="modal-area__checkbox-wrapper">
                            {currentTodoCheckboxes.map(renderCheckbox)}
                        </div>
                    </div>

                </div>
            </Scrollbars>

            <div className="button__container">
                <ButtonText text={Constants.BUTTON_REMOVE_TITLE} handleClick={removeTodo} />
            </div>
        </>
    );
}

export default ModalView;
