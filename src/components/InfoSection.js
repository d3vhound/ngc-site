import React, { Component } from 'react';
import Button from '../components/Button';
import PropTypes from 'prop-types'

class InfoSection extends Component {

	render() {

		const MixpanelTest = () => {
			console.log('Test')
			this.context.mixpanel.track('Test')
		}

		return (
		<section className="section info-section">
			<div className="container" style={{marginBottom: '3rem', zIndex: '3',}}>
				<div className="columns">
	
					<div className="column">
						<h1 className="hero-title">Why we <span style={{fontFamily: 'IBM Plex Mono', fontWeight: '400'}}>code</span></h1>
						<p>
							We want to create a better future. Imagine the technology you'd see in a sci-fi movie... The only way to get there is by creating code-related solutions for businesses of all sizes to employ. Thus advancing our world into a more technologically sophisticated and safe environment. Just imagine the world 30 years from now... We want to make that happen sooner by disrupting all industries with cutting edge software.
						</p>
					</div>
	
					<div className="column">
						<div className="corner-img">
							<div className="img-frame" style={{ paddingBottom: '71%' }}>
								
								<img className="corner-img-child" src="https://res.cloudinary.com/devhound/image/upload/c_fill,f_auto,g_center,h_571,q_auto,w_800/v1529929438/zany-jadraque-571205-unsplash_auoson.jpg" width="800" height="571" alt="info section 1" />
								
							</div>
						</div>
						<div className="corner-img">
							<div className="img-frame" style={{paddingBottom: '71%'}}>
							
								<img className="corner-img-child" src="https://res.cloudinary.com/devhound/image/upload/c_fill,f_auto,h_571,q_auto,w_800/v1529929623/About_Us_Office-25_rwbiqn.jpg" width="800" height="571" alt="info section 2" />
								
							</div>
						</div>
						
					</div>
	
				</div>
			</div>
			<div className="container has-text-centered">
				<Button onClick={MixpanelTest} to="/story" color="dark" text="A Quick Story About What We Do" />
			</div>
		</section>
		)
	}
}

InfoSection.contextTypes = {
	mixpanel: PropTypes.object.isRequired
}

export default InfoSection