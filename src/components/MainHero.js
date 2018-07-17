 /* eslint-disable */
import React, { Component } from 'react'
import Button from '../components/Button'
import { historyEnteringEventType } from "../../gatsby-browser"

class MainHero extends Component {

  componentDidMount() {
      
	}

  render() {
    return (
    <>
        <section className="section herov2">

          <div className="video-container">
            <video className="lazy" autoPlay playsInline loop muted id="video-bg" poster="https://res.cloudinary.com/devhound/image/upload/v1529955642/Spacious_qaqfxc.jpg">
                <source data-src="https://res.cloudinary.com/devhound/video/upload/v1529956010/Spacious_e1cnqg.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="container">
            
        <div className="columns">
  
          <div className="column has-text-left">
            <h1 className="hero-title">{this.props.title}</h1>
            <p>{this.props.subtitle}</p>

            <Button to="/projects" color="white" text="View Portfolio"/>
          </div>

          <div className="column" style={{maxHeight: '300px'}}>
            
          </div>
  
        </div>

      </div>

    </section>
    </>
    )
  }
}

export default MainHero