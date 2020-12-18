import React from 'react';
import {connect} from "react-redux";
import {changeFilter} from "./reduxActions";

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>

                <span
                    className="selectAll"
                    //onClick={this.props.selector}
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
                    //onClick={this.props.doneRemover}
                >
                    remove completed
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filter: state.filter,
    activeTasks: state.activeTasks
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(changeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);