import React from 'react';
import uuid from 'react-uuid';
import Task from './Task';
import Footer from './footer';
import './style.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tasks: [],
            filter: 'all',
            filtered: [],
            activeTasks: 0

        }
        this.changeHandler = this.changeHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.itemRemover = this.itemRemover.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.doneRemover = this.doneRemover.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.filterItems = this.filterItems.bind(this);
        this.selectAll = this.selectAll.bind(this);
    }

    changeHandler(event) {
        this.setState({value: event.target.value});
    }

    inputHandler(event) {
        event.preventDefault();
        let inputText = this.state.tasks;
        inputText.push({
            taskValue: this.state.value,
            id: uuid(),
            checks: false,
        });
        this.setState({tasks: inputText, value: ''}, this.filterItems);
    }

    checkboxHandler(task) {
        let oldTasks = this.state.tasks;
        oldTasks.map((item) =>
            item.id === task ?
                item.checks = !item.checks :
                null
        );
        this.setState({tasks: oldTasks}, this.filterItems);
    }

    selectAll(event) {
        let oldTasks = this.state.tasks;
        oldTasks.forEach((item) =>
            item.checks = event.target.checked
        )
        this.setState({tasks: oldTasks}, this.filterItems);
    }

    itemRemover(task) {
        let newTasks = this.state.tasks.filter((t) => t.id !== task);
        this.setState({tasks: newTasks}, this.filterItems);
    }

    doneRemover() {
        let oldTask = this.state.tasks;
        const newTask = oldTask.filter(x => x.checks !== true);
        document.getElementById('allComp').checked = false;
        this.setState({tasks: newTask}, this.filterItems);
    }

    setFilter(e){
        let filterState = e.currentTarget.dataset.value;
        this.setState({filter: filterState}, this.filterItems)};

    filterItems(){
        let oldTasks = this.state.tasks;
        let filter = this.state.filter;
        let activeCount = oldTasks.filter(x => x.checks !== true).length;
        if(filter === 'all'){
            this.setState({filtered: oldTasks, activeTasks: activeCount});
        }else if(filter === 'active'){
            let newTasks = oldTasks.filter(x => x.checks !== true);
            this.setState({filtered: newTasks, activeTasks: activeCount});
        }else if (filter === 'done'){
            let newTasks = oldTasks.filter(x => x.checks === true);
            this.setState({filtered: newTasks, activeTasks: activeCount});
        }
    };

    render() {
        return (
            <div
                className="App"
            >
                <div
                    className="header"
                >
                    <form
                        className="appForm"
                        onSubmit={this.inputHandler}
                    >
                        <input
                            type="text"
                            className="formInput"
                            placeholder="Enter your task name here"
                            value={this.state.value}
                            onChange={this.changeHandler}
                        />
                    </form>
                </div>
                <div
                    className='section'
                >
                    {this.state.filtered.map((item) =>
                        <Task
                            item={item}
                            key={item.id}
                            itemRemover={this.itemRemover}
                            checkHandle={this.checkboxHandler}
                        />
                        )}
                </div>
                <div
                    className="footer"
                >
                    <Footer
                        setFilter={this.setFilter}
                        filterItems={this.filterItems}
                        selectAll={this.selectAll}
                        doneRemover={this.doneRemover}
                        filter={this.state.filter}
                        activeTasks={this.state.activeTasks}
                    />
                </div>
            </div>
        );
    }
}

export default App;