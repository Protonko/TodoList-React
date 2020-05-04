import React from 'react';

import TodoCard from '@Components/TodoList/TodoCard/TodoCard';
import { CARD_TEXT } from '@/static/data-objects';

function TodoList(props) {
    const todos = props.todos;

    return (
        <div className="todo-list">
            <div className="todo-list-wrapper">
                {todos.map(elem => (
                    <TodoCard
                        title={elem.title}
                        description={elem.description}
                        key={elem.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;