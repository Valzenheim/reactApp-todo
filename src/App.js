import React from 'react';
import Task from './Task';
import Footer from './Footer';
import './style.css';
import './reduxState';
import './reduxActions';
import './reduxReducer';

class App extends React.Component {





    // checkboxHandler(task) {
    //     let oldTasks = this.state.tasks;
    //     oldTasks.map((item) =>
    //         item.id === task ?
    //             item.checks = !item.checks :
    //             null
    //     );
    //     this.setState({tasks: oldTasks}, this.filterItems);
    // }
    //
    // propsSelector(){
    //     let select = !this.state.allSelector
    //     this.setState({allSelector: select})
    //     this.selectAll()
    // }
    //
    // selectAll() {
    //     let oldTasks = this.state.tasks;
    //     oldTasks.forEach((item) =>
    //         item.checks = this.state.allSelector
    //     )
    //     this.setState({tasks: oldTasks}, this.filterItems);
    // }
    //
    // itemRemover(task) {
    //     let newTasks = this.state.tasks.filter((t) => t.id !== task);
    //     this.setState({tasks: newTasks}, this.filterItems);
    // }
    //
    // doneRemover() {
    //     let oldTask = this.state.tasks;
    //     const newTask = oldTask.filter(x => x.checks !== true);
    //     this.setState({tasks: newTask}, this.filterItems);
    // }
    //
    // setFilter(e){
    //     let filterState = e.currentTarget.dataset.value;
    //     this.setState({filter: filterState}, this.filterItems)};
    //
    // filterItems(){
    //     let oldTasks = this.state.tasks;
    //     let filter = this.state.filter;
    //     let activeCount = oldTasks.filter(x => x.checks !== true).length;
    //     if(filter === 'all'){
    //         this.setState({filtered: oldTasks, activeTasks: activeCount});
    //     }else if(filter === 'active'){
    //         let newTasks = oldTasks.filter(x => x.checks !== true);
    //         this.setState({filtered: newTasks, activeTasks: activeCount});
    //     }else if (filter === 'done'){
    //         let newTasks = oldTasks.filter(x => x.checks === true);
    //         this.setState({filtered: newTasks, activeTasks: activeCount});
    //     }
    // };

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
                            onChange={(event)=>{this.props.addVal(event.target.value)}}
                        />
                    </form>
                </div>
                <div className='section'>
                    {this.props.filtered.map((item) =>
                        <Task
                            item={item}
                            key={item.id}
                            //itemRemover={this.itemRemover}
                            //checkHandle={this.checkboxHandler}
                        />
                        )}
                </div>
                    <Footer
                        filter={this.props.filter}
                        //setFilter={this.props.setFilter()}
                    />
            </div>
        );
    }
}

export default App;