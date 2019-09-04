import React, { Component } from 'react';
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

  constructor(){  // Add props as parameter if want to access in constructor
    super();  // Add props as parameter if want to access in constructor
    console.log('App - Constructor');
  }

  componentDidMount(){  // After component rendered in DOM
    // Example Ajax Call etc.
    console.log('App - Mounted');
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

  handleonDecrement = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({
      Counters: counters
    });
  }

  render() {
    console.log('App - Rendered');

    return(
      <React.Fragment>
        <Navbar totalCounters={this.state.Counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
            Counters={this.state.Counters} 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} 
            onDecrement={this.handleonDecrement}
          />
        </main>
      </React.Fragment>
    );
  };

}

export default App;
