import React, { useState } from 'react';
import ButtonAdd from '@Components/Common/Buttons/ButtonAdd';
import InputAdd from '@Components/Common/Inputs/InputAdd';

// Create hook to watch input value and reset
function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodoCard(props) {
    const input = useInputValue('');

    function submitHandler(event) {
        event.preventDefault();

        if (input.value().trim()) {
            props.addTodo(input.value());
            input.clear();
        }
    }
    return (
        <form className="add-todo" onSubmit={submitHandler}>
            <InputAdd
                params={input.bind}
                placeholder="Write title here..."
            />
            <ButtonAdd />
        </form>
    )
}

export default AddTodoCard;