import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from '@actions';

const initialState = {
    todos: [],
    checkboxes: [],
    loading: true,
    isError: false,
    isEdit: false,
    currentTodoId: null, // id of editable element
    checkboxCache: [],
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
