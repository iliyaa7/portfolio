import React from 'react';
import './Portfolio.css';
import aroundPath from '../../images/Around.jpg'
import newsExplorerPath from '../../images/NewsExplorer.jpg'
import firstProjectPath from '../../images/First-Project.jpg'

function Education() {

  return(
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__heading'>PORTFOLIO</h2>
      <h2 className='portfolio__subtitle'>Hover or click on the project for more information</h2>
      <div className='portfolio__container'>
        <div className='portfolio__image-container'>
          <img src={newsExplorerPath} alt='project image' className='portfolio__image' ></img>
          <div className='portfolio__overlay'>
            <h3 className='portfolio__name'>NewsExplorer</h3>
            <h4 className='portfolio__description'>Web apllication for searching and saving your favorite news articles</h4>
            <div className='portfolio__link-container'>
              <a className='portfolio__link' href='http://igfs.online/' target='_blank'>Site</a>
              <a className='portfolio__link' href='https://github.com/iliyaa7/final-project-iliya' target='_blank'>Git</a>
            </div>
          </div>
        </div>
        <div className='portfolio__image-container' >
          <img src={aroundPath} alt='project image' className='portfolio__image' ></img>
          <div className='portfolio__overlay'>
            <h3 className='portfolio__name'>Around US</h3>
            <h4 className='portfolio__description'>A small social network for sharing images from around the world</h4>
            <div className='portfolio__link-container'>
              <a className='portfolio__link' href='https://iliyaa7.students.nomoreparties.sbs/' target='_blank'>Site</a>
              <a className='portfolio__link' href='https://github.com/iliyaa7/react-around-api-full' target='_blank'>Git</a>
            </div>
          </div>
        </div>
        <div className='portfolio__image-container' >
          <img src={firstProjectPath} alt='project image' className='portfolio__image' ></img>
          <div className='portfolio__overlay'>
            <h3 className='portfolio__name'>Road Trip</h3>
            <h4 className='portfolio__description'>A small landing page about a nice trip in USA</h4>
            <div className='portfolio__link-container'>
              <a className='portfolio__link' href='https://iliyaa7.github.io/web_project_3/' target='_blank'>Site</a>
              <a className='portfolio__link' href='https://github.com/iliyaa7/web_project_3' target='_blank'>Git</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education;