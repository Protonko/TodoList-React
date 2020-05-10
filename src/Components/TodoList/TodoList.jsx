import React, {useEffect, useState} from 'react';
import TodoCard from '@Components/TodoList/TodoCard/TodoCard';

function TodoList(props) {
    const todos = props.todos;

    return (
        <div className="todo-list">
            <div className="todo-list-wrapper">
                {todos.map(elem => (
                    <TodoCard
                        title={elem.title}
                        description={elem.body}
                        key={elem.id}
                        modalShow={props.modalShow}
                        id={elem.id}
                        setCardId={props.setCardId}
                        setEditMode={props.setEditMode}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;