import React from 'react';
import './Intro.css';
import emailPath from '../../images/intro-mail-logo.svg'
import gitPath from '../../images/intro-git-logo.svg'
import linkedinPath from '../../images/intro-linkedin-logo.svg'
import iliyaPath from '../../images/a.jpg'


function Intro() {


  return(
    <div className='intro__container'>
      <div className='intro__text-holder'>
        <h2 className='intro__heading'>Hi, I am</h2>
        <h3 className='intro__subtitle'>Iliya Gomon</h3>
        <p className='intro__description'>Full Stack / Frontend developer</p>
        <div className='intro__links-container'>
          <a className='intro__button'  href="mailto:iliyaa7@gmail.com" target='_blank'><img src={emailPath} className='intro__logo' alt='email logo' /></a>
          <a className='intro__button' href="https://github.com/iliyaa7" target='_blank'><img src={gitPath} className='intro__logo' alt='git logo' /></a>
          <a className='intro__button' href="https://www.linkedin.com/in/iliya-gomon/" target='_blank'><img src={linkedinPath} className='intro__logo' alt='linkedin logo' /></a>
        </div>
      </div>
        <img src={iliyaPath} alt='my picture' className='intro__image'/>
    </div>
  )
}

export default Intro;