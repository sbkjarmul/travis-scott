import React from 'react'
import logo from '../assets/images/logo.png'
import '../App.css'
import '../styles/navbar.css'
import { BsChatDots } from 'react-icons/bs'

const Navbar = ({ setIsForm, currentView }) => {
  const logoClass = currentView === 2 || currentView === 4 ? 'navbar__logo' : 'navbar__logo navbar__logo--white';
  const buttonClass = currentView === 2 || currentView === 4 ? 'navbar__button' : 'navbar__button navbar__button--white';
  const buttonIconClass = currentView === 2 || currentView === 4 ? 'navbar__button-icon' : 'navbar__button-icon navbar__button-icon--white';

  const handleClick = () => {
    setIsForm(true);
  }

  return (
    <div className="navbar">
      <img className={logoClass} src={logo}></img>
        <button className={buttonClass} onClick={ handleClick }>
        <span className={buttonIconClass}>
         <BsChatDots />
        </span>
        <span className="navbar__button-text">   
        Contact
        </span>
      </button>
    </div>
  )
}

export default Navbar;