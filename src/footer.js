import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
                <input type="checkbox" id="allComp" />
                <span>
                        {}/{}tasks left
                    </span>

                <button className={this.state.filter === 'all' ? 'activeBtn' : ''}
                        data-value = 'all'
                        >all</button>

                <button className={this.state.filter === 'active' ? 'activeBtn' : ''}
                        data-value = 'active'
                        >active</button>

                <button className={this.state.filter === 'done' ? 'activeBtn' : ''}
                        data-value = 'done'
                        >done</button>

                <button >
                    remove completed
                </button>
            </>
        )
    }
}
export default Footer;