import React from 'react';
import logo from '../logo.svg';

const Navbar = () => {
    return(
        <nav>
          <img src={logo} alt='logo'></img>
          <h3 className='title'>ReactFacts</h3>
      </nav>
    )
}

export default Navbar