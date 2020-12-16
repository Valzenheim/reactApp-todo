import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <>

                <span
                    className="selectAll"
                    onClick={this.props.selector}
                >
                    {this.props.activeTasks} tasks left
                </span>

                <button
                    className={this.props.filter === 'all' ? 'activeBtn' : 'sleepBtn'}
                    data-value='all'
                    onClick={this.props.setFilter}

                >
                    all
                </button>

                <button
                    className={this.props.filter === 'active' ? 'activeBtn' : 'sleepBtn'}
                    data-value='active'
                    onClick={this.props.setFilter}
                >
                    active
                </button>

                <button
                    className={this.props.filter === 'done' ? 'activeBtn' : 'sleepBtn'}
                    data-value='done'
                    onClick={this.props.setFilter}
                >
                    done
                </button>

                <button
                    className="removeAll"
                    onClick={this.props.doneRemover}
                >
                    remove completed
                </button>
            </>
        )
    }
}

export default Footer;