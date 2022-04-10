import React from 'react'
import './LoadingScreen.css'

function LoadingScreen() {

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowyY = 'scroll';
    }
  }, [])

  return (
    <div className="loading__container">
        <div className="loading__wrapper">
            <div className="spinner"></div>
        </div>
    </div>
  )
}

export default LoadingScreen;