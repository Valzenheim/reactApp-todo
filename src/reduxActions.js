import {TASK, VALUE, FILTER} from './reduxState';

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

export const mapDispatchToProps = (dispatch)=> {
    return {
        addVal: (text)=> dispatch(addValue(text)),
        addText: () => dispatch(addTask()),
        setFilter: (filter) => dispatch(changeFilter(filter))
    }
}
