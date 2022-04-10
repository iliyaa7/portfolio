import React from 'react';
import './Intro.css';
import emailPath from '../../images/intro-mail-logo.svg'
import gitPath from '../../images/intro-git-logo.svg'
import linkedinPath from '../../images/intro-linkedin-logo.svg'
import emailWhitePath from '../../images/intro-mail-logo_white.svg'
import gitWhitePath from '../../images/intro-git-logo_white.svg'
import linkedinWhitePath from '../../images/intro-linkedin-logo_white.svg'
import arrowPath from '../../images/white-arrow.svg'
import cvPath from '../../images/cv.svg'


function Intro() {
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
      <div className='intro__mobile-container'>
        <div className='intro__mobile-background'/>
        <div className='intro__text-holder'>
          <h2 className='intro__heading'>Hi, I am</h2>
          <h3 className='intro__subtitle'>Iliya Gomon</h3>
          <p className='intro__description'>Full Stack / Frontend developer</p>
          <div className='intro__links-container'>
            <a className='intro__button'  href="mailto:iliyaa7@gmail.com" target='_blank'><img src={emailWhitePath} className='intro__logo' alt='email logo' /></a>
            <a className='intro__button' href="https://github.com/iliyaa7" target='_blank'><img src={gitWhitePath} className='intro__logo' alt='git logo' /></a>
            <a className='intro__button' href="https://www.linkedin.com/in/iliya-gomon/" target='_blank'><img src={linkedinWhitePath} className='intro__logo' alt='linkedin logo' /></a>
          </div>
        </div>
        <img src={arrowPath} alt='arrow image' className='intro__mobile-arrow'/>
      </div>
    )
  }

  return(
    <>
      <div className='intro__container'>
      <div className='intro__text-holder'>
        <h2 className='intro__heading'>Hi, I am</h2>
        <h3 className='intro__subtitle'>Iliya Gomon</h3>
        <p className='intro__description'>Full Stack / Frontend developer</p>
        <div className='intro__links-container'>
          <a className='intro__button'  href="mailto:iliyaa7@gmail.com" target='_blank'><img src={emailPath} className='intro__logo' alt='email logo' /></a>
          <a className='intro__button' href="https://github.com/iliyaa7" target='_blank'><img src={gitPath} className='intro__logo' alt='git logo' /></a>
          <a className='intro__button' href="https://www.linkedin.com/in/iliya-gomon/" target='_blank'><img src={linkedinPath} className='intro__logo' alt='linkedin logo' /></a>
          <a className='intro__button' href="https://drive.google.com/file/d/1VtUQeuOn1XR6VgOQXxK68PtCbZgkpykf/view?usp=sharing" target='_blank'><img src={cvPath} className='intro__logo' alt='cv logo' /></a>
        </div>
      </div>
    </div>
    </>

  )
}

export default Intro;