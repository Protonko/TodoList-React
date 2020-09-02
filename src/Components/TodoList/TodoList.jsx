import React from 'react';
import PropTypes from 'prop-types';

import TodoCard from '@Components/TodoList/TodoCard/TodoCard';

function TodoList({ todos }) {
  function renderCard(elem) {
    return (
      <TodoCard
        key={elem.id}
        id={elem.id}
        title={elem.title}
        description={elem.body}
      />
    );
  }

  return (
      <div className="todo-cards">
          <ul className="todo-cards__list">
              {todos.map(renderCard)}
          </ul>
      </div>
  );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default TodoList;
