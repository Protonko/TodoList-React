export const getCheckbox = (store, data) => {
    store.setState({
        ...store,
        checkboxes: data,
    });
};

export const getCheckboxCache = store => {
    store.setState({
        ...store,
        checkboxes: store.state.checkboxCache,
    });
};

export const completeToggle = (store, data) => {
    store.setState({
        ...store,
        checkboxes: data,
    });
};

export const addCheckbox = (store, data) => {
    store.setState({
        ...store,
        checkboxes: store.state.checkboxes.concat(data),
    });
};

export const removeCheckbox = (store, id) => {
    let removedCheckbox = store.state.checkboxes.filter(checkbox => checkbox.id !== id);

    store.setState({
        ...store,
        checkboxes: removedCheckbox,
    });
};
