import React, { useEffect } from 'react';
import '../../index.css';
import './App.css';
import Header from '../Header/Header'
import Intro from '../Intro/Intro';
import Education from '../Education/Education'
import iliyaPath from '../../images/c.jpg'
import PopupNav from '../PopupNav/PopupNav';
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import emailjs from 'emailjs-com'
import arrowPath from '../../images/white-arrow.svg'

function App(props) {

  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isServerError, setIsServerError] = React.useState(false);
  const [isEmailSuccessful, setIsEmailSuccessful] = React.useState(false);
  const [isMainLoading, setIsMainLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsMainLoading(false)
    }, 3500)
  }, [])

  React.useEffect(() => {
    const updatePredicate = () => {
      setIsDesktop(window.matchMedia('(min-width: 562px)').matches)
    }
    updatePredicate();
    window.addEventListener('resize', updatePredicate);

    return () => window.removeEventListener('resize', updatePredicate);
  },[])

  function handleTogglePopupNav() {
    setIsPopupNavOpen(!isPopupNavOpen);
  }

  function closeAllPopups() {
    setIsPopupNavOpen(false);
  }

  function handleSendEmail(serviceId, tamplateId, templateParams, userId) {
    setIsEmailSuccessful(false);
    setIsServerError(false);
    setIsLoading(true);
    emailjs.send(serviceId, tamplateId, templateParams, userId)
    .then((res) => {
      setIsEmailSuccessful(true);
      setTimeout(() => {
        setIsEmailSuccessful(false);
      }, 3000);
    })
    .catch((err) => {
      setIsServerError(true);
      setTimeout(() => {
        setIsServerError(false);
      }, 3000);
      console.log(err);
    })
    .finally(() => setIsLoading(false));
  }

  return (
    <>
      {isMainLoading && <LoadingScreen/>}
      <div className='bodyy' id='home'>
      <PopupNav isOpen={isPopupNavOpen} onClose={closeAllPopups}/>
        <Header handleTogglePopupNav={handleTogglePopupNav} onClose={closeAllPopups} isPopupNavOpen={isPopupNavOpen}/>
        {isDesktop &&
          <div className='upper-container'>
              <img src={arrowPath} alt='arrow logo' className='upper-container__arrow'/>
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
        <Contact isEmailSuccessful={isEmailSuccessful} handleSendEmail={handleSendEmail} isLoading={isLoading} isServerError={isServerError}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
