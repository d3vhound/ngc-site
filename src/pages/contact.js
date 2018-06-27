import React from 'react'
import SubHero from '../components/SubHero'
import Facebook from '../assets/images/logo-facebook.svg'
import Linkedin from '../assets/images/logo-linkedin.svg'
import Twitter from '../assets/images/logo-twitter.svg'
import Instagram from '../assets/images/logo-instagram.svg'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <SubHero title="Contact" subtitle="" />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>Phone</h1>
            <a href="tel:2145852164"><p>+ 1 (214) 585-2164</p></a>
            <h1>Email</h1>
            <a href="mailto:tango@nextgencode.io"><p>tango@nextgencode.io</p></a>
          </div>
          <div className="column">
            <h1>Location</h1>
            <a href="https://www.google.com/maps/place/3911+4th+St,+Lubbock,+TX+79415/data=!4m2!3m1!1s0x86fe0d44b8b745e1:0x49268cb7830598ce?sa=X&ved=0ahUKEwjJrNnptPTbAhVHIqwKHVBHDMQQ8gEIKDAA"><p>3911 4th St. Suite 114 Lubbock, TX 79415</p></a>
          </div>
          <div className="column">
            <h1>Social</h1>
            <div className="contact-social">
              <a href="https://www.facebook.com/NextGenCodeCompany/">
                <img src={Facebook} alt="nextgen code company facebook icon" />
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
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact