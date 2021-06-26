import React from 'react'
import ReactPlayer from 'react-player'
import '../App.css'

const Video = () => {
  return (
    <div className="video">
      <div className="video__wrapper">
        <ReactPlayer 
          className="video__player"
          url="https://vimeo.com/178629241"
          width="100%"
          height="100%"
          controls="true"
          light="https://izaktv.pl/wp-content/uploads/2020/04/1234.jpg"
        />
      </div>
    </div>
  )
}

export default Video;