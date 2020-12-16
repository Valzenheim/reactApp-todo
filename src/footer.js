import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <>
                <input
                    type="checkbox"
                    id="allComp"
                    onChange={this.props.selectAll}
                />
                <span>
                    {this.props.activeTasks} tasks left
                </span>

                <button
                    className={this.props.filter === 'all' ? 'activeBtn' : ''}
                    data-value='all'
                    onClick={this.props.setFilter}

                >
                    all
                </button>

                <button
                    className={this.props.filter === 'active' ? 'activeBtn' : ''}
                    data-value='active'
                    onClick={this.props.setFilter}
                >
                    active
                </button>

                <button
                    className={this.props.filter === 'done' ? 'activeBtn' : ''}
                    data-value='done'
                    onClick={this.props.setFilter}
                >
                    done
                </button>

                <button
                    onClick={this.props.doneRemover}
                >
                    remove completed
                </button>
            </>
        )
    }
}

export default Footer;