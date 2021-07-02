import React from 'react'
import '../App.css'
import '../styles/album.css'
import '../styles/controls.css'
import album from '../assets/images/album.png'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const Album = ({ currentView, direction }) => {
  const setClass = () => {
    const isMobile = window.screen.width < 992;
    
    if (isMobile) {
      return 'album';
    }

    if (currentView === 2 && direction === 'up') {
      return 'album slide-up-in'; 
    }

    if (!(currentView === 2) && direction === 'up') {
      return 'album album--off slide-up-out'; 
    }

    if (currentView === 2 && direction === 'down') {
      return 'album slide-down-in'; 
    }

    if (!(currentView === 2) && direction === 'down') {
      return 'album album--off slide-down-out'; 
    }
  }

  return (
    <div className={setClass()}>
      <img className="album__image" src={album} alt="album"></img>
      <div className="album__caption">
        <p className="album__caption--above">Check out!</p>
        <h1 className="album__caption--header">Get the</h1>
        <h1 className="album__caption--header">new album now!</h1>
        <div className="album__caption__line"></div>
        <p className="album__caption--description">Astroworld is the third studio album by American rapper and record producer Travis Scott. It was released on August 3, 2018, through Cactus Jack Records and Grand Hustle Records, and distributed by Epic Records. </p>
        <div className="album__button-container">
          <button className="album__button">
            <span className="album__button__icon">
            <FaApple />
            </span>
            <span className="album__button__text">
              <span>Download on the</span>
              <span className="album__button__text--big">App Store</span>
            </span>
          </button>
          <button className="album__button">
            <span className="album__button__icon">
            <FaGooglePlay />
            </span>
            <span className="album__button__text">
              <span>GET IT ON</span>
              <span className="album__button__text--big">Google Play</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Album;