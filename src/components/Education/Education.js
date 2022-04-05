import React from 'react';
import './Education.css';

function Education() {

  return(
    <section className='education'>
      <div className='education__text-holder'>
        <h1 className='education__heading'>Professional Training</h1>
        <p className='education__text'>
        Nulla in velit a metus rhoncus tempus.
        Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra.
        In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis.
        Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.
        </p>
        <a href='https://www.practicum100.org/' target='_blank' className='education__link'>Learn more about Practicum</a>
      </div>
    </section>
  )
}

export default Education;