import {TASK, VALUE, FILTER, CLEAR, EACH, CHECK, REMOVE, ONLOAD} from './Constance';

export const addTask = () => ({
    type: TASK
});


export const addValue = (text)=> ({
    type: VALUE,
    payload: text
});

export const changeFilter = (filter) => ({
    type: FILTER,
    payload: filter
});

export const clear = () => ({
    type: CLEAR
});

export const eachSelector = () => ({
    type: EACH
});

export const checkHandler = (index) => ({
    type: CHECK,
    payload: index
});

export const itemRemover = (index) =>({
    type: REMOVE,
    payload: index
});

export const localOnLoad = () => ({
    type: ONLOAD
});
