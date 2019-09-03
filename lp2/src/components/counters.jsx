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

    handleReset = () => {
        const counters = this.state.Counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({
            Counters: counters
        });
    }

    handleIncrement = counter => {
        const counters = [...this.state.Counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({
            Counters: counters
        });
    }

    render() { 
        return ( 
            <React.Fragment>
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                { this.state.Counters.map(
                    counter => 
                        <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}></Counter>
                    ) 
                }
            </React.Fragment> 
        );
    }
}
 
export default Counters;