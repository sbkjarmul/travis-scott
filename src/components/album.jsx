import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'
import album from '../assets/images/album.png'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const Album = ({ currentView }) => {

  return (
    <div className={currentView === 2 ? 'album' : 'album album--off'}>
      <img className="album__image" src={album} alt="album"></img>
      <div className="album__caption">
        <p className="album__caption--above">Check out!</p>
        <h1 className="album__caption--header">Get the</h1>
        <h1 className="album__caption--header">new album now!</h1>
        <div className="album__caption__line"></div>
        <p className="album__caption--description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis laudantium dolore suscipit optio itaque voluptates veniam placeat, laboriosam omnis ex!</p>
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