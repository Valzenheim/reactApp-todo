import React from 'react';
import './reduxState';
import './reduxActions';
import './reduxReducer';

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
                    onClick={()=>{this.props.setFilter('all')}}

                >
                    all
                </button>

                <button
                    className={this.props.filter === 'active' ? 'activeBtn' : 'sleepBtn'}
                    onClick={()=>{this.props.setFilter('active')}}
                >
                    active
                </button>

                <button
                    className={this.props.filter === 'done' ? 'activeBtn' : 'sleepBtn'}
                    onClick={()=>{this.props.setFilter('done')}}
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

export default Footer;