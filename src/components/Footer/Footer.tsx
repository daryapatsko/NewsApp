import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__box">
        <p>copyright © 2023 | NBC NEWS</p>
        <div className="center__box-footer">
          <p>Privacy Policy</p>
          <p> Do not sell my personal info</p>
          <p>Terms of Service</p>
          <p> <span>nbcnews.com</span> Site Map</p>
        </div>
        <ul className="links__container">
          <li> About</li>
          <li> Contact</li>
          <li> Help</li>
          <li> Careers</li>
          <li> Ad Choices</li>
        </ul>

      </div>

    </div>
  )
}

export default Footer
