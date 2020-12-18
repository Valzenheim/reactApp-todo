import React from 'react';
import trash from './trash-alt-solid.svg';
import check from './check-solid.svg'


class Task extends React.Component {

    render() {
        return (
            <div
                className={this.props.item.checks ? 'completed' : 'active'}
                id={this.props.item.id}
            >
                <label className="checkContainer">
                    <img className='markIcon' src={check} alt={check} />
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={this.props.item.checks}
                        //onChange={this.checkHandler}
                    />

                </label>
                <span
                    className="textArea">
                    {this.props.item.taskValue}
                </span>

                <span
                    className="remSpan"
                    //onClick={this.taskRemover}
                >
                    <img className='trashIcon' src={trash} alt={trash}/>
                </span>
            </div>
        )
    }
}

export default Task;
