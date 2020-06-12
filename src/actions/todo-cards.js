export const getCards = (store, data) => {
    store.setState({
        ...store,
        todos: data,
        loading: false,
    });
};

export const addCard = (store, data) => {
    store.setState({
        ...store,
        todos: store.state.todos.concat(data),
    });
};

export const removeTodo = (store, id) => {
    let removedTodo = store.state.todos.filter(todo => todo.id !== id);

    store.setState({
        ...store,
        todos: removedTodo,
    });
};

export const setCurrentTodoId = (store, id) => {
    const checkboxCached = id ? store.state.checkboxes : store.state.checkboxCache;
    store.setState({
        ...store,
        currentTodoId: id,
        checkboxCache: checkboxCached,
    });
};

export const setEditMode = (store, isEdit) => {
    store.setState({
        ...store,
        isEdit: isEdit,
    });
};
