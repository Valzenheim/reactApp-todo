import React from 'react';
import trash from './trash-alt-solid.svg';
import check from './check-solid.svg'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.taskRemover = this.taskRemover.bind(this);
        this.checkHandler = this.checkHandler.bind(this)
    }

    taskRemover() {
        this.props.itemRemover(this.props.item.id);
    }

    checkHandler() {
        this.props.checkHandle(this.props.item.id);
    }

    render() {
        return (
            <div
                className={this.props.item.checks ? 'completed' : 'active'}
                id={this.props.item.id}
            >
                <label className="checkContainer">
                    <img src={check} alt={check} />
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={this.props.item.checks}
                        onChange={this.checkHandler}
                    />

                </label>
                <span
                    className="textArea">
                    {this.props.item.taskValue}
                </span>

                <span
                    className="remSpan"
                    onClick={this.taskRemover}>
                    <img  src={trash} alt={trash}/>
                </span>
            </div>
        )
    }
}

export default Task;