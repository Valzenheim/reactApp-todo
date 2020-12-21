import React from 'react';
import {connect} from "react-redux";
import Task from './Task';
import Footer from './Footer';
import './style.css';
import './reduxActions';
import {addTask, addValue, localOnLoad} from "./reduxActions";

class App extends React.Component {

    componentDidMount() {
        this.props.loadState();
    };

    taskRender() {
        let filter = this.props.filter;
        let tasks = [];
        if (filter === 'all') {
            tasks = this.props.taskArray;
            return tasks.map((item) => <Task item={item} key={item.id}/>);
        } else if (filter === 'active') {
            tasks = this.props.taskArray.filter(x => x.checks !== true);
            return tasks.map((item) => <Task item={item} key={item.id}/>);
        } else if (filter === 'done') {
            tasks = this.props.taskArray.filter(x => x.checks === true);
            return tasks.map((item) => <Task item={item} key={item.id}/>);
        }
    };

    render() {
        return (
            <div className="App">
                <div className="header">
                    <form
                        className="appForm"
                        onSubmit={(event) => {
                            event.preventDefault();
                            this.props.addText();
                        }}
                    >
                        <input
                            type="text"
                            className="formInput"
                            placeholder="Enter your task name here"
                            value={this.props.inValue}
                            onChange={(event) => {
                                this.props.addVal(event.target.value)
                            }}
                        />
                    </form>
                </div>
                <div className='section'>
                    {this.taskRender()}
                </div>
                <Footer/>
            </div>
        );
    }
}


export const mapStateToProps = (state) => ({
    taskArray: state.taskArray,
    inValue: state.inValue,
    filter: state.filter,
    activeTasks: state.activeTasks,
    allSelector: state.allSelector

});

const mapDispatchToProps = (dispatch) => ({
    addVal: (text) => dispatch(addValue(text)),
    addText: () => dispatch(addTask()),
    loadState: () => dispatch(localOnLoad())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);