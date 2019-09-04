import React from 'react';

// Stateless Functional component
const Navbar = ({totalCounters}) => {
  console.log('NavBar - Rendered');

  return ( 
    <nav className="navbar navbar-light bg-light mb-4">
      <a className="navbar-brand" href="/">
        Total
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}
  
export default Navbar;