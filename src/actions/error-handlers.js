export const showError = () => {
    store.setState({
        loading: false,
        isError: true,
    });
};
