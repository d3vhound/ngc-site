import React, { Component } from 'react'
import { Link } from './Link'

class SubHero extends Component {
  render() {
    return (
      <section className="section subhero">
        <div className="ng-sub-hero-container" >
					<span className="home-breadcrumb">
						<Link to="/">
							<svg style={{marginRight: '5px'}}width="20px" height="20px" fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m217.9 256 127.1-127c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0l-144 143.9c-9.1 9.1-9.3 23.7-.7 33.1l144.6 144.9c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9z"/></svg>
							Home
						</Link>
					</span>
					<div className='ng-subhero-title'>
						<h1 className="hero-title">
							{this.props.title}
						</h1>
	          <h2 className="subhero-subtitle">{this.props.subtitle}</h2>
					</div >
					<div className='ng-subhero-spacer'>
					</div>
        </div>
      </section>
    )
  }
}

export default SubHero
