import React from 'react';
import PropTypes from 'prop-types';

import TodoCard from '@Components/TodoList/TodoCard/TodoCard';

function TodoList({ todos }) {
    return (
        <div className="todo-cards">
            <ul className="todo-cards__list">
                {todos.map((elem, index) => (
                    <TodoCard
                        key={index}
                        id={elem.id}
                        title={elem.title}
                        description={elem.body}
                    />
                ))}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default TodoList;
