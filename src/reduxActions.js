import {TASK, VALUE, FILTER, CLEAR, EACH} from './reduxState';

export const addTask = () => {
    return {
        type: TASK,
    }
}

export const addValue = (text)=>{
    return{
        type: VALUE,
        payload: text
    }
}

export const changeFilter = (filter) => {
    return{
        type: FILTER,
        payload: filter
    }
}

export const clear =()=>{
    return{
        type: CLEAR,
    }
}

export const eachSelector = ()=>{
    return{
        type: EACH
    }
}