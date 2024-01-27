import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import iconFB from "../../assets/img/icon_fb.svg"
import iconTwitter from "../../assets/img/icon_twitter.svg"
import iconLetter from "../../assets/img/ic_letter.svg"


const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__box">
        <p>copyright © 2023 | <Link to='https://www.nbcnews.com/'>NBC NEWS</Link></p>
        <div className="center__box-footer">
          <ul className="links__container">
            <li><Link to='https://www.nbcnews.com/information/nbc-news-info/about-nbc-news-digital-n1232178'> About</Link></li>
            <li><Link to='https://www.nbcnews.com/information/nbc-news-info/contact-us-n1232521'> Contact</Link></li>
            <li><Link to='https://nbcnews.zendesk.com/hc/en-us'> Help</Link></li>
            <li><Link to='https://www.nbcunicareers.com/'> Careers</Link></li>
          </ul>
        </div>

        <ul className="links-social__container">
          <li><Link to='https://www.facebook.com/NBCNews/'><img className='icons' src={iconFB} alt="iconFb" /></Link></li>
          <li><Link to='https://twitter.com/nbcnews'><img src={iconTwitter} alt="icontw" className='icons'/></Link></li>
          <li><Link to='https://www.nbcnews.com/newsletters'><img src={iconLetter} alt="iconletter" width='50px' height='50px' className='icons'/></Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
