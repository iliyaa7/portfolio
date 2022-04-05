import React from 'react';
import './Nav.css';
import menuPath from '../../images/menu-white.svg'

function Nav(props) {

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const updatePredicate = () => {
      setIsDesktop(window.matchMedia('(min-width: 562px)').matches)
    }
    updatePredicate();
    window.addEventListener('resize', updatePredicate);

    return () => window.removeEventListener('resize', updatePredicate);
  },[])

  if(props.isPopup) {
    return (
      <nav className='nav nav_type_popup'>
        <a onClick={props.onClose} href='#home' className='nav__link nav__link_type_popup'>Home</a>
        <a onClick={props.onClose} href='#about' className='nav__link nav__link_type_popup'>About me</a>
        <a onClick={props.onClose} href='#skills' className='nav__link nav__link_type_popup'>Skills</a>
        <a onClick={props.onClose} href='#portfolio' className='nav__link nav__link_type_popup'>Portfolio</a>
        <a onClick={props.onClose} href="https://drive.google.com/file/d/1VtUQeuOn1XR6VgOQXxK68PtCbZgkpykf/view?usp=sharing" target='_blank' className='nav__link nav__link_type_popup'>CV</a>
        <a onClick={props.onClose} href='#contact'className='nav__link nav__link_type_white nav__link_type_popup'>CONTACT ME</a>
      </nav>
    )
  }

  if(!isDesktop) {
    return (
      <nav className='nav'>
        <button  onClick={props.handleOpenPopupNav} className='nav__button'>
          <img src={menuPath} />
        </button>
      </nav>
    )
  }

  return (
    <nav className='nav'>
      <a href='#home' className='nav__link'>Home</a>
      <a href='#about' className='nav__link'>About me</a>
      <a href='#skills' className='nav__link'>Skills</a>
      <a href='#portfolio' className='nav__link'>Portfolio</a>
      <a href='#contact' className='nav__link nav__link_type_white'>CONTACT ME</a>
    </nav>
  );
}

export default Nav;



