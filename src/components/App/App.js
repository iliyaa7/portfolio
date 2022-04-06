import React from 'react';
import '../../index.css';
import './App.css';
import Header from '../Header/Header'
import Intro from '../Intro/Intro';
import Education from '../Education/Education'
import iliyaPath from '../../images/c.jpg'
import PopupNav from '../PopupNav/PopupNav';
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'

function App(props) {

  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);

  React.useEffect(() => {
    const updatePredicate = () => {
      setIsDesktop(window.matchMedia('(min-width: 562px)').matches)
    }
    updatePredicate();
    window.addEventListener('resize', updatePredicate);

    return () => window.removeEventListener('resize', updatePredicate);
  },[])

  function handleOpenPopupNav() {
    setIsPopupNavOpen(true);
  }

  function closeAllPopups() {
    setIsPopupNavOpen(false);
  }


  return (
    <div className='bodyy' id='home'>
      <PopupNav isOpen={isPopupNavOpen} onClose={closeAllPopups}/>
      <Header handleOpenPopupNav={handleOpenPopupNav} onClose={closeAllPopups} isPopupNavOpen={isPopupNavOpen}/>
      {isDesktop &&
        <div className='upper-container'>
          <div className='black-square'>
            <img src={iliyaPath} alt='my picture' className='intro__image'/>
          </div>
          <Intro/>
        </div>
      }
      {!isDesktop && <Intro/>}
      <Education/>
      <main className='main' id='about'>
        <AboutMe/>
      </main>
      <Portfolio/>
    </div>
  );
}

export default App;
