import {TASK, VALUE, FILTER, CLEAR, EACHSELECT, CHECK, REMOVE, ONLOAD} from './Constance';
import {createStore} from 'redux';
import uuid from 'react-uuid';

const initialState = {
    taskArray: [],
    inValue: '',
    filter: 'all',
    activeTasks: 0,
    allSelector: false
};


export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case VALUE: {
            let val = action.payload;
            return {
                ...state,
                inValue: val
            };
        }
        case TASK: {
            let oldTask = state.taskArray;
            oldTask.push({
                taskValue: state.inValue,
                checks: false,
                id: uuid()
            });
            let activeCount = oldTask.filter(x => !x.checks).length
            localStorage.setItem('tasks', JSON.stringify(oldTask));
            return {
                ...state,
                activeTasks: activeCount,
                taskArray: oldTask,
                inValue: '',
            };
        }
        case FILTER: {
            let oldTask = state.taskArray;
            let activeCount = oldTask.filter(x => !x.checks).length;
            let newFilter = action.payload;
            localStorage.setItem('filter', JSON.stringify(newFilter));
            return {
                ...state,
                activeTasks: activeCount,
                filter: newFilter
            };
        }
        case CLEAR: {
            let oldTask = state.taskArray;
            let activeCount = oldTask.filter(x => !x.checks).length;
            const newTask = oldTask.filter(x => !x.checks);
            localStorage.setItem('tasks', JSON.stringify(newTask));
            return {
                ...state,
                activeTasks: activeCount,
                taskArray: newTask,
            };
        }
        case EACHSELECT: {
            let selector = state.allSelector;
            let oldTask = state.taskArray;
            oldTask.map(item => item.checks = !selector);
            let activeCount = oldTask.filter(x => !x.checks).length;
            localStorage.setItem('tasks', JSON.stringify(oldTask));
            return {
                ...state,
                activeTasks: activeCount,
                allSelector: !selector,
                taskArray: oldTask
            };
        }
        case CHECK: {
            let oldTask = state.taskArray;
            let index = action.payload;
            oldTask.forEach(item =>
                item.id === index ?
                    item.checks = !item.checks :
                    null);
            let activeCount = oldTask.filter(x => !x.checks).length;
            localStorage.setItem('tasks', JSON.stringify(oldTask));
            return {
                ...state,
                taskArray: oldTask,
                activeTasks: activeCount
            };
        }
        case REMOVE: {
            let index = action.payload;
            let oldTask = state.taskArray.filter(item => item.id !== index);
            let activeCount = oldTask.filter(x => !x.checks).length;
            localStorage.setItem('tasks', JSON.stringify(oldTask));
            return {
                ...state,
                taskArray: oldTask,
                activeTasks: activeCount
            };
        }
        case ONLOAD: {
            let localFilter = JSON.parse(localStorage.getItem('filter'));
            let localArray = JSON.parse(localStorage.getItem('tasks'));
            if (localArray && localFilter) {
                let activeCount = localArray.filter(x => !x.checks).length;
                return {
                    ...state,
                    taskArray: localArray,
                    activeTasks: activeCount,
                    filter: localFilter
                };
            }
            break
        }
        default:
            return state;
    }
}

export const store = createStore(rootReducer);