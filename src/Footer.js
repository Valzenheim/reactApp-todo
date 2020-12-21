import React from 'react';
import {connect} from "react-redux";
import {eachSelector, changeFilter, clear} from "./reduxActions";

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>

                <span
                    className="selectAll"
                    onClick={()=>{this.props.eachSelect()}}
                >
                    {this.props.activeTasks} tasks left
                </span>

                <button
                    className={this.props.filter === 'all' ? 'activeBtn' : 'sleepBtn'}
                    onClick={()=>this.props.setFilter('all')}

                >
                    all
                </button>

                <button
                    className={this.props.filter === 'active' ? 'activeBtn' : 'sleepBtn'}
                    onClick={()=>this.props.setFilter('active')}
                >
                    active
                </button>

                <button
                    className={this.props.filter === 'done' ? 'activeBtn' : 'sleepBtn'}
                    onClick={()=>this.props.setFilter('done')}
                >
                    done
                </button>

                <button
                    className="removeAll"
                    onClick={()=>{this.props.doneRemover()}}
                >
                    remove completed
                </button>
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
    setFilter: filter => dispatch(changeFilter(filter)),
    doneRemover: ()=>dispatch(clear()),
    eachSelect: ()=>dispatch(eachSelector())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);