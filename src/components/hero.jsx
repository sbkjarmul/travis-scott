import React, {useEffect} from 'react'
import '../App.css'
import HeroCaption from './hero-caption'
import { useHistory } from 'react-router-dom'

const Hero = ({ currentView }) => {
  

  return (
    <div className={currentView === 1 ? 'hero' : 'hero hero--off'}>
      <HeroCaption />
    </div>
  )
}

export default Hero;