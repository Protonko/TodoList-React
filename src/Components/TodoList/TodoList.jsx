import React from 'react';
import TodoCard from '@Components/TodoList/TodoCard/TodoCard';

function TodoList(props) {
    const todos = props.todos;

    return (
        <div className="todo-list">
            <div className="todo-list-wrapper">
                {todos.map(elem => (
                    <TodoCard
                        key={Math.random() + elem.id}
                        id={elem.id}
                        title={elem.title}
                        description={elem.body}
                        modalShow={props.modalShow}
                        setCardId={props.setCardId}
                        setEditMode={props.setEditMode}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;