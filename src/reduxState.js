import './reduxActions';

export const initialState = {
    taskArray: [],
    inValue:'',
    filter: 'active',
    filtered: [],
    activeTasks: 0,
    allSelector: false
};

export const mapStateToProps = (state) => {
    console.log(state)
    return {
        firstName: state.taskArray,
        inValue: state.inValue,
        filter: state.filter,
        filtered: state.filtered,
        activeTasks:  state.activeTasks,
        allSelector: state.allSelector
    }

}

export const TASK = 'TASK';
export const VALUE = 'VALUE';
export const FILTER = 'FILTER';
