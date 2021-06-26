import React from 'react'
import logo from '../assets/images/logo.png'
import '../App.css'
import { BsChatDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo}></img>

      <Link to="/album">
        <li>Album</li>
      </Link>
      <Link to="/video">
        <li>Video</li>
      </Link>

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