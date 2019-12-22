// react library
import React from 'react';

// styles
import './Navbar.scss';

const NavBar = () => {
  return (
    <header className='navbar-container'>
      <div className='navbar-container__content'>
        <a className='navbar-brand' href='/'>
          Friday Code Challenge
        </a>
      </div>
    </header>
  );
};

export default NavBar;
