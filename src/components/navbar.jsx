import React from 'react'
import logo from '../assets/images/logo.png'
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo}></img>
    </div>
  )
}

export default Navbar;