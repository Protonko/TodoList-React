import { useEffect } from 'react';

export const useFetch = (api, handler, throwError, deps = []) => {
    useEffect(() => {
        setTimeout(() => {
            fetch(api)
                .then(response => response.json())
                .then(data => handler(data))
                .catch(throwError);
        }, 1500) // fake delay
    }, deps);
};
