import React from 'react'
import '../App.css'

const HeroCaption = ({ isForm, setIsForm }) => {

  const handleClick = () => {
    setIsForm(isForm => !isForm);
  }

  const setClass = () => {
    if (isForm) {
      return 'hero__button hero__button--active';
    }
    
    return 'hero__button';
  }

  return (
    <div className="hero__caption">
      <h1 className="hero__text">TRAVIS</h1>
      <p className="hero__text--under">SCOTT</p>
      <button className={setClass()} onClick={handleClick}>Write to me</button>
    </div>
  )
}

export default HeroCaption;