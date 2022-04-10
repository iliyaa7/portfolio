import React from 'react';
import Nav from '../Nav/Nav'
import './Header.css'
import logoPath from '../../images/logo1.svg'


function Header(props) {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const updatePredicate = () => {
      setIsDesktop(window.matchMedia('(min-width: 562px)').matches)
    }
    updatePredicate();
    window.addEventListener('resize', updatePredicate);

    return () => window.removeEventListener('resize', updatePredicate);
  },[])

  if(!isDesktop) {
    return (
      <header className={`header ${props.isPopup && 'header_type_popup'}`}>
        <img className='header__logo' src={logoPath} />
        <button onClick={props.handleTogglePopupNav} class={`hamburger hamburger--spin ${props.isPopupNavOpen && 'is-active'}`} type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </header>
    )
  }

  return (
    <header className={`header ${props.isPopup && 'header_type_popup'}`}>
      <img className='header__logo' src={logoPath} />
      <Nav isOpen={props.isPopupNavOpen} handleOpenPopupNav={props.handleOpenPopupNav}/>
    </header>
  );
}

export default Header;
