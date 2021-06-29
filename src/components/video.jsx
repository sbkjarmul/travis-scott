import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useHistory } from  'react-router-dom'
import '../App.css'

const Video = ({ currentView }) => {
  const [play, setPlay] = useState(false);

  const turnOnPlayer = () => {
    setPlay(play => !play);
  }

  return (
    <div 
      className={currentView === 3 ? 'video' : 'video video--off'}
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
          loop={true}
        />
      </div>
    </div>
  )
}

export default Video;