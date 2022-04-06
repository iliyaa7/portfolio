import React from 'react';
import './AboutMe.css';
import separatorPath from '../../images/separator.svg';


function AboutMe() {

  function importAll(r) {
    return r.keys().map(r);
  }
  //requires paths for images - the images have to be in a directory inside 'public'
  const currentSkillsImages = importAll(require.context('../../../public/skills', false, /\.(png|jpe?g|svg)$/));
  const basicSkillsImages = importAll(require.context('../../../public/basic', false, /\.(png|jpe?g|svg)$/));
  const learningSkillsImages = importAll(require.context('../../../public/learning', false, /\.(png|jpe?g|svg)$/));

  //In order to get the proper name from the file, give the image a name with capital letters if needed,
  //and replace - space with dash, or dot with underscore.
  function getImageName(imagePath) {
    const imageName = imagePath.slice(14).split('.')[0].replace('_', '.').replace('-', ' ');
    return imageName
  }

  return(
    <>
      <section className='about'>
        <h2 className='about__heading'>ABOUT ME</h2>
        <p className='about__text'>
        My name is Tomasz Gajda, I'm a third year Applied Computer Science student at the AGH University of Science and Technology in Krakow. I have been learning Front-End technologies for a year and this time was just enough for me to make sure that this is my place in the industry.
        <br/>
        <br/>
        Membership in the science club developed my design skills, which quickly turned into a new hobby. I am fluent in English (spoken and written) and intermediate Spanish. Apart from designing and programming websites, my passion is all kinds of motorsport - from rallies to the very king of motorsport - formula 1.
        </p>
        <img className='about__separator'  src={separatorPath} alt='separator'/>
      </section>
      <section className='skills' id='skills'>
        <h2 className='about__heading about__heading_type_skills'>Skills</h2>
        <h3 className='skills__title'>USING NOW</h3>
        <div className='skills__container' id='using-now'>
          {currentSkillsImages.map((card, i) => (
            <div key={i} className='skills__card'>
              <img src={card} alt='logo' className='skills_image'/>
              <p className='skills__text'>{getImageName(card)}</p>
            </div>
          ))}
        </div>
        <h3 className='skills__title'>BASIC</h3>
        <div className='skills__container' id='learning'>
          {basicSkillsImages.map((card, i) => (
            <div key={i} className='skills__card'>
              <img src={card} alt='logo' className='skills_image'/>
              <p className='skills__text'>{getImageName(card)}</p>
            </div>
          ))}
        </div>
        <h3 className='skills__title'>LEARNING</h3>
        <div className='skills__container' id='learning'>
          {learningSkillsImages.map((card, i) => (
            <div key={i} className='skills__card'>
              <img src={card} alt='logo' className='skills_image'/>
              <p className='skills__text'>{getImageName(card)}</p>
            </div>
          ))}
        </div>
      </section>
    </>

  )
}

export default AboutMe;