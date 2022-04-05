import React from 'react';
import Nav from '../Nav/Nav'
import './Header.css'
import logoPath from '../../images/logo1.svg'


function Header(props) {
  return (
    <header className={`header ${props.isPopup && 'header_type_popup'}`}>
      <img className='header__logo' src={logoPath} />
      {props.isPopupNavOpen ?
      <button className='popup__close-button' onClick={props.onClose}></button>
      :
      <Nav handleOpenPopupNav={props.handleOpenPopupNav}/>
      }
    </header>
  );
}

export default Header;
