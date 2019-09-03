import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
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
    return(
      <React.Fragment>
        <Navbar totalCounters={this.state.Counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            Counters={this.state.Counters} 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} 
          />
        </main>
      </React.Fragment>
    );
  };

}

export default App;
