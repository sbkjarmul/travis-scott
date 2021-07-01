import React from 'react'
import '../App.css'
import '../styles/footer.css'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
 
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a className="footer__link">
          <FaInstagram />
        </a>
        <a className="footer__link">
         <FaTwitter />
        </a>
        <a className="footer__link">
          <FaYoutube />
        </a>
      </div>
    </div>
  )
}

export default Footer;