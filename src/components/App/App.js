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
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'
import emailjs from 'emailjs-com'

function App(props) {

  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isServerError, setIsServerError] = React.useState(false);
  const [isEmailSuccessful, setIsEmailSuccessful] = React.useState(false);

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

  function handleSendEmail(serviceId, tamplateId, templateParams, userId) {
    setIsEmailSuccessful(false);
    setIsServerError(false);
    setIsLoading(true);
    emailjs.send(serviceId, tamplateId, templateParams, userId)
    .then((res) => {
      console.log(res);
      setIsEmailSuccessful(true);
      setTimeout(() => {
        setIsEmailSuccessful(false);
      }, 3000);
    })
    .catch((err) => {
      setIsServerError(true);
      console.log(err);
    })
    .finally(() => setIsLoading(false));
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
      <Contact isEmailSuccessful={isEmailSuccessful} handleSendEmail={handleSendEmail} isLoading={isLoading} isServerError={isServerError}/>
      <Footer/>
    </div>
  );
}

export default App;
