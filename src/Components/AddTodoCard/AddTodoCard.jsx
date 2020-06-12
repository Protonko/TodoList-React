import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useGlobal from '@store';
import { useInputValue } from '@hooks/useInputValue';
import * as Constants from '@static/constants';

import ButtonAdd from '@Components/Common/Buttons/ButtonAdd';
import InputAdd from '@Components/Common/Inputs/InputAdd';

function AddTodoCard() {
    const [globalState, globalActions] = useGlobal();
    const input = useInputValue('');

    function submitHandler(event) {
        event.preventDefault();

        const title = input.value().trim();

        if (title) {
            const card = {
                id: uuidv4(),
                title: title,
                body: '',
            };

            globalActions.todoCards.addCard(card);
            input.clear();
        }

    }
    return (
        <form className="add-todo" onSubmit={submitHandler}>
            <InputAdd
                params={input.bind}
                placeholder={Constants.INPUT_ADD_PLACEHOLDER}
            />
            <ButtonAdd />
        </form>
    )
}

export default AddTodoCard;
