import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import '../App.css'

const Video = ({ currentView, direction }) => {
  const [play, setPlay] = useState(false);

  const turnOnPlayer = () => {
    setPlay(play => !play);
  }

  const setClass = () => {
    const isMobile = window.screen.width < 992;
    
    if (isMobile) {
      return 'video';
    }

    if (currentView === 3 && direction === 'up') {
      return 'video slide-up-in'; 
    }

    if (!(currentView === 3) && direction === 'up') {
      return 'video video--off slide-up-out'; 
    }

    if (currentView === 3 && direction === 'down') {
      return 'video slide-down-in'; 
    }

    if (!(currentView === 3) && direction === 'down') {
      return 'video video--off slide-down-out'; 
    }
  }

  return (
    <div 
      className={setClass()}
      onClick={turnOnPlayer}
    >
      <div className="video__wrapper">
        <ReactPlayer 
          className="video__player"
          url="https://vimeo.com/250513876"
          width="100%"
          height="100%"
          controls={true}
          playing={play}
          light="https://i.redd.it/cub3q3orcxq31.jpg"
        />
      </div>
    </div>
  )
}

export default Video;