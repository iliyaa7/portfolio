import React from 'react';
import '../../index.css';
import './App.css';
import Header from '../Header/Header'
import Intro from '../Intro/Intro';

function App(props) {

  const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);





  return (
    <div className='bodyy'>
      <div className='upper-container'>
        <Header/>
        <div className='black-square'/>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
