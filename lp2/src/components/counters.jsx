import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    render() { 
        console.log('Counters - Rendered');

        const { onReset, Counters, onDelete, onIncrement, onDecrement } = this.props;

        return (
            <React.Fragment>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                { Counters.map(
                    counter => 
                        <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counter={counter}></Counter>
                    ) 
                }
            </React.Fragment> 
        );
    }
}
 
export default Counters;