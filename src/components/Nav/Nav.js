import React from 'react';
import './Nav.css';


function Nav(props) {
  return (
    <nav className='nav'>
      <button className='nav__button'>About me</button>
      <button className='nav__button'>Skills</button>
      <button className='nav__button'>Portfolio</button>
      <button className='nav__button nav__button_type_white'>CONTACT ME</button>
    </nav>
  );
}

export default Nav;



