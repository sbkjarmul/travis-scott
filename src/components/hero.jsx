import React from 'react'
import '../App.css'
import HeroCaption from './hero-caption'

const Hero = ({ currentView, direction, isForm, setIsForm }) => {
  
  const setClass = () => {
    const isMobile = window.screen.width < 992;
    
    if (isMobile) {
      return 'hero';
    }

    if (currentView === 1 && direction === 'start') {
      return 'hero';
    }

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
      <HeroCaption isForm={isForm} setIsForm={setIsForm} />
    </div>
  )
}

export default Hero;