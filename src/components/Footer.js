import React from 'react'
import { Link } from './Link'
import Facebook from '../assets/images/logo-facebook.svg'
import Linkedin from '../assets/images/logo-linkedin.svg'
import Twitter from '../assets/images/logo-twitter.svg'
import Instagram from '../assets/images/logo-instagram.svg'

const navLinks = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About' },
  { url: '/projects', name: 'Projects' },
  { url: '/contact', name: 'Contact' },
];

export default () => (
  <footer className="footer dark">
    <div className="container">
      <div className="columns is-desktop">

        <div className="column is-4">
          <h3 className="footer-title">About us</h3>
          <div className="separator"></div>
          <ul className="footer-list">
            <li>
              <p>We are a collective of highly intelligent geeks and we love to code. We produce solutions for every facet of business.</p>
            </li>
          </ul>
          <div className="footer-social">
            <a href="https://www.facebook.com/NextGenCodeCompany/">
              <img src={Facebook} alt="nextgen code company facebook icon"/>
            </a>
            <a href="https://www.linkedin.com/company/nextgen-code-company">
            <img src={Linkedin} alt="nextgen code company linkedin icon" />
            </a>
            <a href="https://twitter.com/NextGenCodeCo">
              <img src={Twitter} alt="nextgen code company twitter icon" />
            </a>
            <a href="https://www.instagram.com/nextgencodeco/">
              <img src={Instagram} alt="nextgen code company instagram icon" />
            </a>
          </div>
        </div>

        <div className="column is-4">
          <h3 className="footer-title">Get in Touch</h3>
          <div className="separator"></div>
          <p>NextGen Code Company, LLC</p>
          <p>3911 4th St. Suite 114 Lubbock, TX 79415</p>
          <div className="contact">
            <div className="phone">
              <a href="tel:2145852164">+ 1 (214) 585-2164</a>
            </div>
            <div className="email">
              <a href="mailto:tango@nextgencode.io">
                tango@nextgencode.io
              </a>
            </div>
          </div>
        </div>

        <div className="column is-4">
          <h3 className="footer-title">Links</h3>
          <div className="separator"></div>
          <ul className="footer-links">
            {navLinks.map(({url, name}) => (
              <li key={name}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      
      </div>
    </div>
  </footer>
)