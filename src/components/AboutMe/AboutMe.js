import React from 'react';
import './AboutMe.css';
import separatorPath from '../../images/separator.svg';


function AboutMe() {

  function importAll(r) {
    return r.keys().map(r);
  }
  //requires paths for images - the images have to be in a directory inside 'public'
  const currentSkillsImagesNoOrder = importAll(require.context('../../../public/skills', false, /\.(png|jpe?g|svg)$/));
  const basicSkillsImages = importAll(require.context('../../../public/basic', false, /\.(png|jpe?g|svg)$/));
  const learningSkillsImages = importAll(require.context('../../../public/learning', false, /\.(png|jpe?g|svg)$/));

  //In order to get the proper name from the file, give the image a name with capital letters if needed,
  //and replace - space with dash, or dot with underscore.
  function getImageName(imagePath) {
    const imageName = imagePath.slice(14).split('.')[0].replace('_', '.').replace('-', ' ');
    return imageName
  }

  const order = [3, 0, 4, 7, 6, 1, 5, 2]
  const currentSkillsImages = order.map(i => currentSkillsImagesNoOrder[i])

  return(
    <>
      <section className='about'>
        <h2 className='about__heading'>ABOUT ME</h2>
        <p className='about__text'>
        Hello my name is Iliya Gomon and I’m a Web developer. I am very passionate about coding and a highly motivated quick learner.
        Recently I have finished Pructicum’s 8-month intensive program designed to train talents to be successful Web Developers <a className='about__link' href="#education">(click here to read about this program)</a>, and already developed some projects including this portfolio.<br/>
        <br/>
        Beside being a web developer I am a musician and a guitar teacher.
        During the past years I have toured, recorded music and had some local success with my band. Created a small business and have passed my passion for music to lots of students.
        The research that I have made while constructing my own courses and a curriculum for my students have gained me lots of experience in learning new subjects.
        My analytical skills, technical background and the love for solving problems helped me to choose my next challenge - Full Stack Developer.
        Throughout my journey to achieving this goal, I've developed a huge passion for coding and I am eager to find my first role in the industry  and would be glad to get an opportunity to present myself personally.
        <a className='about__link' href="#contact"> So please don’t hesitate to contact me.</a>
          </p>
        <img className='about__separator'  src={separatorPath} alt='separator'/>
      </section>
      <section className='skills' id='skills'>
        <h2 className='about__heading about__heading_type_skills'>SKILLS</h2>
        <h3 className='skills__title'>USING NOW:</h3>
        <div className='skills__container' id='using-now'>
          {currentSkillsImages.map((card, i) => (
            <div key={i} className='skills__card'>
              <img src={card} alt='logo' className='skills_image'/>
              <p className='skills__text'>{getImageName(card)}</p>
            </div>
          ))}
        </div>
        <h3 className='skills__title'>BASIC:</h3>
        <div className='skills__container' id='learning'>
          {basicSkillsImages.map((card, i) => (
            <div key={i} className='skills__card'>
              <img src={card} alt='logo' className='skills_image'/>
              <p className='skills__text'>{getImageName(card)}</p>
            </div>
          ))}
        </div>
        <h3 className='skills__title'>LEARNING:</h3>
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