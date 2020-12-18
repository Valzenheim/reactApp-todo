import {TASK, VALUE, FILTER} from './reduxState'
import {createStore} from 'redux'
import uuid from 'react-uuid';

const initialState = {
    taskArray: [],
    inValue:'',
    filter: 'all',
    filtered: [],
    activeTasks: 0,
    allSelector: false
};


export const rootReducer = (state = initialState, action) => {
    //
    // let filter = state.filter;
    // let oldTask = state.taskArray
    // let activeCount = oldTask.filter(x => x.checks !== true).length;
    //
    // if(filter === 'all') {
    //     return {
    //         ...state,
    //         filtered: oldTask,
    //         activeTasks: activeCount,
    //
    //     };
    // }else if(filter === 'active'){
    //     let newTasks = oldTask.filter(x => x.checks !== true);
    //     return {
    //         ...state,
    //         filtered: newTasks,
    //         activeTasks: activeCount,
    //     };
    // }else if (filter === 'done'){
    //     let newTasks = oldTask.filter(x => x.checks === true);
    //     return{
    //         ...state,
    //         filtered: newTasks,
    //         activeTasks: activeCount,
    //     };
    // }

    let oldTask = state.taskArray
    switch (action.type) {
        case VALUE:{
            let val = state.inValue
            val = action.payload
            return{
                ...state,
                inValue: val
            };
        }
        case TASK: {
            oldTask.push({
                taskValue: state.inValue,
                checks: false,
                id: uuid()
            });
            return {
                ...state,
                taskArray: oldTask,
                inValue: ''
            };

        }
        case FILTER: {
            let newFilter= action.payload
            console.log(newFilter);
            return {
                ...state,
                filter: newFilter
            }
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(rootReducer);