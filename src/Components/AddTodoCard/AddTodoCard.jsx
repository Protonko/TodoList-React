import React, { useState } from 'react';
import addIcon from '@/assets/icons/svg/plus.svg';

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
            <input {...input.bind} className="input add-todo__input" placeholder="Write title here..." type="text"/>
            <button className="button button--add add-todo__button">
                <svg className="icon--square_10 icon--red add-todo__button-icon">
                    <use xlinkHref={addIcon}></use>
                </svg>
                <span className="add-todo__button-text">Add</span>
            </button>
        </form>
    )
}

export default AddTodoCard;