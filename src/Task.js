import React from 'react';
import trash from './trash-alt-solid.svg';
import check from './check-solid.svg';
import {connect} from "react-redux";
import {checkHandler, itemRemover} from './reduxActions';


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
                        onChange={()=>this.props.checkHandle(this.props.item.id)}
                    />

                </label>
                <span
                    className="textArea">
                    {this.props.item.taskValue}
                </span>

                <span
                    className="remSpan"
                    onClick={()=>this.props.taskRemover(this.props.item.id)}
                >
                    <img className='trashIcon' src={trash} alt={trash}/>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    firstName: state.taskArray,
    inValue: state.inValue,
    filter: state.filter,
    activeTasks:  state.activeTasks,
    allSelector: state.allSelector
});

const mapDispatchToProps = dispatch => ({
    checkHandle: (index) => dispatch(checkHandler(index)),
    taskRemover: (index) => dispatch(itemRemover(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
