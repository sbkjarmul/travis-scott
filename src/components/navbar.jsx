import React from 'react'
import logo from '../assets/images/logo.png'
import '../App.css'
import { BsChatDots } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo}></img>
        <button className="navbar__button">
        <span className="navbar__button-icon">
         <BsChatDots />
        </span>
        Contact
      </button>
    </div>
  )
}

export default Navbar;