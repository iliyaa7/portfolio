import React from 'react';
import './Footer.css'
import arrowPath from '../../images/arrow.svg'
import linkedinPath from '../../images/footer-linkedin.svg'
import mailPath from '../../images/footer-mail.svg'

function Footer() {


  return (
    <footer className='footer'>
      <a className='footer__link' href='#home'>
        <img src={arrowPath} alt='arrow image' className='footer__arrow-image'/>
      </a>
      <a className='footer__link' href='#home'>BACK TO TOP</a>
      <div className='footer__links-container'>
        <a className='footer__link' href="https://www.linkedin.com/in/iliya-gomon/" target='_blank'>
          <img src={linkedinPath} alt='arrow image' className='footer__link-image'/>
        </a>
        <a className='footer__link'  href="mailto:iliyaa7@gmail.com" target='_blank'>
          <img src={mailPath} alt='arrow image' className='footer__link-image'/>
        </a>
      </div>
      <p className='footer__copyright'>{`© ${new Date().getFullYear()} Design by Tomasz Gajda`}</p>
    </footer>
  );
}

export default Footer;
