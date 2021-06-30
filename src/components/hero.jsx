import React from 'react'
import '../App.css'
import HeroCaption from './hero-caption'

const Hero = ({ currentView, direction }) => {
  const setClass = () => {
    if (currentView === 1 && direction === 'up') {
      return 'hero slide-up-in'; 
    }

    if (!(currentView === 1) && direction === 'up') {
      return 'hero hero--off slide-up-out'; 
    }

    if (currentView === 1 && direction === 'down') {
      return 'hero slide-down-in'; 
    }

    if (!(currentView === 1) && direction === 'down') {
      return 'hero hero--off slide-down-out'; 
    }
  }

  return (
    <div className={setClass()}>
      <HeroCaption />
    </div>
  )
}

export default Hero;