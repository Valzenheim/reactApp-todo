import React from 'react';
import uuid from 'react-uuid';
import Task from './Task';
import Footer from './footer'
import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value:'',
      tasks:[],

    }
    this.changeHandler=this.changeHandler.bind(this);
    this.inputHandler=this.inputHandler.bind(this);
    this.itemRemover=this.itemRemover.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({value: event.target.value});
  }

  inputHandler(event){
    event.preventDefault();
    let inputText = this.state.tasks;
        inputText.push({
          taskValue: this.state.value,
          id: uuid(),
          checks: false,
        });
    this.setState({tasks: inputText});
    this.setState({value: ''});
  }

  checkboxHandler(task){
    let oldTasks = this.state.tasks;
    oldTasks.map((item)=>
        item.id === task ?
            item.checks = !item.checks :
            null
    );
    this.setState({tasks: oldTasks});
  }


  itemRemover(task) {
    let newTasks = this.state.tasks;
    this.setState({tasks: newTasks.filter((t)=> t.id !== task)});
  }

  render() {
    return (
        <div className="App">
          <div className="header">
            <form className="appForm"
                  onSubmit={this.inputHandler}>
              <input type="text"
                     className="formInput"
                     placeholder="Enter your task name here"
                     value={this.state.value}
                     onChange={this.changeHandler}/>
            </form>
          </div>
          <div className='section'>
            {this.state.tasks.map((item)=>
                <Task item={item}
                      key={item.id}
                      itemRemover = {this.itemRemover}
                      checkHandle = {this.checkboxHandler}/>)}
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
    );
  }
}

export default App;