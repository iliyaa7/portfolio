import React from 'react';
import './Education.css';

function Education() {

  return(
    <section className='education' id='education'>
      <div className='education__text-holder'>
        <h1 className='education__heading'>Professional Training</h1>
        <p className='education__text'>
        <a className='education__link' href='https://www.practicum100.org/' target='_blank'>Practicum 100 by Yandex</a><br/>
        A 8-month intensive program designed to train talents to be successful Web Developers.
        The course was divided into weekly sprints with theoretical learning and practical applyment.
        Coursework Includes: <a className='education__link'>HTML, CSS, JavaScript, React, MongoDB, NodeJS.</a> Each topic had at least one project that was submitted via Git and approved only after a code review.
        <br/>
        <br/>
        Before learning to write client side applications with React, we used vanilla JS (ES6) following the OOP paradigm.
        We have developed several fully-fledged web applications with React and Express using jwt token for authentication and some of them were deployed using the popular cloud services (like Google cloud and AWS).
        We were encouraged to work with documentations and solve our problems with research (google ofcourse). The importance of scaling, code maintenance, ux and avoiding bad practices were a great part of our course.
        I would have to make this section way bigger if I continue to write about the things I have learned so please click on the a link to Practicum’s page below if you are interested to learn more about them!
        </p>
        <a href='https://www.practicum100.org/' target='_blank' className='education__link education__link_type_big'>Learn more about Practicum</a>
      </div>
    </section>
  )
}

export default Education;