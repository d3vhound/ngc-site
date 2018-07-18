import React, { Component } from 'react'
import { Link } from './Link'

class SubHero extends Component {
  render() {
    return (
      <section className="section subhero">
			<div className='ng-subhero-logo'>
				<a href="/" className="ng-footer-logo">
					<svg id="Layer_1" className="ng-logo-with-blocks" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.37 142.45"><title>logo_with_blocks</title><g id="block1"><polygon className="cls-1" points="0 106.84 0 130.58 20.56 142.45 20.56 118.71 0 106.84"></polygon><polygon className="cls-2" points="41.12 106.84 20.56 118.71 20.56 142.45 41.12 130.58 41.12 106.84"></polygon><polygon className="cls-3" points="0.12 106.36 20.68 94.48 41.25 106.36 20.68 118.23 0.12 106.36"></polygon></g><g id="block2"><polygon className="cls-4" points="0 83.1 0 106.84 20.56 118.71 20.56 94.97 0 83.1"></polygon><polygon className="cls-5" points="41.12 106.84 20.56 118.71 20.56 94.97 41.12 83.1 41.12 106.84"></polygon><polygon className="cls-6" points="0.12 82.36 20.68 70.48 41.25 82.36 20.68 94.23 0.12 82.36"></polygon></g><g id="block3"><polygon className="cls-7" points="0 59.36 0 83.1 20.56 94.97 20.56 71.23 0 59.36"></polygon><polygon className="cls-8" points="0.12 59.36 20.68 47.48 41.25 59.36 20.68 71.23 0.12 59.36"></polygon><polygon className="cls-9" points="41.12 59.36 20.56 71.23 20.56 94.97 41.12 83.1 41.12 59.36"></polygon></g><g id="block4"><polygon className="cls-10" points="0 35.6 0 59.36 20.58 71.25 20.58 47.48 0 35.6"></polygon><polygon className="cls-11" points="0 35.61 20.56 23.74 41.12 35.61 20.56 47.48 0 35.61"></polygon><polygon className="cls-12" points="41.37 35.61 20.81 47.48 20.81 71.23 41.37 59.36 41.37 35.61"></polygon></g><g id="block5"><polygon className="cls-13" points="20.56 47.48 20.56 71.23 41.12 83.1 41.12 59.36 20.56 47.48"></polygon><polygon className="cls-14" points="20.56 47.48 41.12 35.61 61.69 47.48 41.12 59.36 20.56 47.48"></polygon><polygon className="cls-15" points="61.69 71.23 41.12 83.1 41.12 59.36 61.69 47.49 61.69 71.23"></polygon></g><g id="block6"><polygon className="cls-16" points="41.12 59.36 41.12 83.1 61.69 94.97 61.69 71.23 41.12 59.36"></polygon><polygon className="cls-17" points="41.12 59.36 61.68 47.48 82.25 59.36 61.68 71.23 41.12 59.36"></polygon><polygon className="cls-18" points="82.25 83.1 61.68 94.97 61.68 71.23 82.25 59.36 82.25 83.1"></polygon></g><g id="block7"><polygon className="cls-19" points="61.69 71.23 61.69 94.97 82.25 106.84 82.25 83.1 61.69 71.23"></polygon><polygon className="cls-20" points="102.81 94.97 82.25 106.84 82.25 83.1 102.81 71.23 102.81 94.97"></polygon><polygon className="cls-21" points="61.68 71.25 82.25 59.38 102.81 71.25 82.25 83.12 61.68 71.25"></polygon></g><g id="block8"><polygon className="cls-22" points="123.37 83.1 102.81 94.97 102.81 118.71 123.37 106.84 123.37 83.1"></polygon><polygon className="cls-23" points="82.25 83.1 82.25 106.84 102.81 118.71 102.81 94.97 82.25 83.1"></polygon><polygon className="cls-24" points="82.25 83.1 102.81 71.23 123.37 83.1 102.81 94.97 82.25 83.1"></polygon></g><g id="block9"><polygon className="cls-25" points="123.37 83.1 102.81 94.97 102.81 71.23 123.37 59.36 123.37 83.1"></polygon><polygon className="cls-26" points="82.25 59.36 82.25 83.1 102.81 94.97 102.81 71.23 82.25 59.36"></polygon><polygon className="cls-27" points="82.25 59.36 102.81 47.48 123.37 59.36 102.81 71.23 82.25 59.36"></polygon></g><g id="block10"><polygon className="cls-28" points="123.37 35.61 102.81 47.48 102.81 71.23 123.37 59.36 123.37 35.61"></polygon><polygon className="cls-29" points="82.25 35.61 82.25 59.36 102.81 71.23 102.81 47.48 82.25 35.61"></polygon><polygon className="cls-30" points="82.25 35.6 102.81 23.72 123.37 35.6 102.81 47.47 82.25 35.6"></polygon></g><g id="block11"><polygon className="cls-31" points="123.37 35.61 102.81 47.48 102.81 23.74 123.37 11.87 123.37 35.61"></polygon><polygon className="cls-32" points="82.25 11.87 82.25 35.61 102.81 47.48 102.81 23.74 82.25 11.87"></polygon><polygon className="cls-33" points="82.25 11.87 102.81 0 123.37 11.87 102.81 23.74 82.25 11.87"></polygon></g></svg>
				</a>
			</div>
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
