import {TASK, VALUE, FILTER, CLEAR, EACH} from './reduxState'
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

    switch (action.type) {
        case VALUE:{
            let val = action.payload
            return{
                ...state,
                inValue: val
            };
        }
        case TASK: {
            let oldTask = state.taskArray
            let activeCount = oldTask.filter(x => x.checks !== true).length+1;
            oldTask.push({
                taskValue: state.inValue,
                checks: false,
                id: uuid()
            });
                return {
                    ...state,
                    activeTasks: activeCount,
                    taskArray: oldTask,
                    inValue: '',
                };
        }
        case FILTER: {
            let oldTask = state.taskArray
            let activeCount = oldTask.filter(x => x.checks !== true).length;
            let newFilter= action.payload
                return{
                    ...state,
                    activeTasks: activeCount,
                    filter: newFilter
                };
        }
        case CLEAR:{
            let oldTask = state.taskArray
            let activeCount = oldTask.filter(x => x.checks !== true).length;
            const newTask = oldTask.filter(x => x.checks !== true);
            return{
                ...state,
                activeTasks: activeCount,
                taskArray: newTask,
            };
        }
        case EACH: {
            let selector = state.allSelector
            let oldTask = state.taskArray
            let activeCount = oldTask.filter(x => x.checks !== true).length;
            oldTask.map(item =>item.checks = !selector)
            return{
                ...state,
                activeTasks: activeCount,
                allSelector: !selector,
                taskArray: oldTask
            };
        }
        default: return state;
    }
}

export const store = createStore(rootReducer);