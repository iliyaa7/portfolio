import React from 'react';
import Nav from '../Nav/Nav'
import './Header.css'
import logoPath from '../../images/portfolio-logo.svg'

function Header(props) {
  return (
    <header className='header'>
      <img className='header__logo' src={logoPath} />
      <Nav isPopup={props.isPopup}  handleOpenPopupNav={props.handleOpenPopupNav}/>
    </header>
  );
}

export default Header;
