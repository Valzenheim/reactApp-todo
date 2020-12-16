import React from 'react'

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state={
            task: props.item
        };
        this.itemRemover = props.itemRemover;
        this.checkHandle = props.checkHandle;
        this.taskRemover = this.taskRemover.bind(this);
        this.checkHandler = this.checkHandler.bind(this)
    }

    taskRemover(){
        this.itemRemover(this.state.task.id)
    }

    checkHandler(){
        this.checkHandle(this.state.task.id)
    }

    render(){
        return(
            <div key={this.state.task.id}
                 className={this.state.task.checks ? 'completed' : 'active'}
                 id={this.state.task.id}>
                <input type="checkbox"
                       id={this.state.task.id}
                       checked={this.state.task.checks}
                       onChange={this.checkHandler}/>
                <span className="textArea">
                    {this.state.task.taskValue}
                </span>

                <span className="remSpan"
                      onClick={this.taskRemover}>
                    ❌
                </span>
            </div>
        )
    }
}
export default Task;