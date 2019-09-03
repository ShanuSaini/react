import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        Counters: [
            {id: 1, value: 1 },
            {id: 2, value: 0 },
            {id: 3, value: 0 },
            {id: 4, value: 0 }
        ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.Counters.filter(c => c.id !== counterId);
        this.setState({
            Counters: counters
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                { this.state.Counters.map(
                    counter => 
                        <Counter key={counter.id} onDelete={this.handleDelete} counter={counter}></Counter>
                    ) 
                }
            </React.Fragment> 
        );
    }
}
 
export default Counters;