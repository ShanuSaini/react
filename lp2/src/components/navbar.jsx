import React from 'react';

const Navbar = ({totalCounters}) => {
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