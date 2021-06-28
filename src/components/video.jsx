import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useHistory } from  'react-router-dom'
import '../App.css'

const Video = () => {
  let history = useHistory();
  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push('/');
  //   }, 10000); 
  // },[])

  // window.addEventListener('keydown', (e) => {
  //   if (e.keyCode === 38) {
  //     history.push('/album');
  //   }

  //   if (e.keyCode === 40) {
  //     history.push('/');
  //   }
  // })

  return (
    <div className="video">
      <div className="video__wrapper">
        <ReactPlayer 
          className="video__player"
          url="https://vimeo.com/250513876"
          width="100%"
          height="100%"
          controls={true}
          light="https://i.redd.it/cub3q3orcxq31.jpg"
        />
      </div>
    </div>
  )
}

export default Video;