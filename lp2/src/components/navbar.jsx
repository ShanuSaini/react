import React, { Component } from 'react';

class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navbar navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#">
          Total
          <span className="badge badge-pill badge-secondary ml-2">{this.props.totalCounters}</span>
        </a>
      </nav>
    );
  }
}
  
export default Navbar;