import React from 'react'
import SubHero from '../components/SubHero'
import Facebook from '../assets/images/logo-facebook.svg'
import Linkedin from '../assets/images/logo-linkedin.svg'
import Twitter from '../assets/images/logo-twitter.svg'
import Instagram from '../assets/images/logo-instagram.svg'

import Layout from '../components/layout'
import Button from '../components/Button';

const Contact = () => (
	<Layout>
		<SubHero title="Project Discovery" subtitle="" />
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">

						<form className="project-discovery-form" name="project_discovery" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

						<input type="hidden" name="form-name" value="project_discovery" required/>
						
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input" type="text" name="name" placeholder="Full name" required/>
  						</div>
						</div>

						<div class="field">
							<label class="label">Business name</label>
							<div class="control">
								<input class="input" type="text" name="business_name" placeholder="Business name" required />
							</div>
						</div>

						<div class="field checkboxes">
							<label class="label">What type of services are you interested in?</label>
								<label class="checkbox">
									<input name="service" value="website" type="checkbox" />
										Website
								</label>
								<label class="checkbox">
									<input name="service" value="mobile app" type="checkbox" />
										Mobile app
								</label>
								<label class="checkbox">
									<input name="service" value="web app" type="checkbox" />
										Web app
								</label>
								<label class="checkbox">
									<input name="service" value="internal business solution" type="checkbox" />
										Internal Business Solution
								</label>
								<label class="checkbox">
									<input name="service" value="technology consulting" type="checkbox" />
									Technology Consulting
								</label>
								<label class="checkbox">
									<input type="checkbox" />
									Other
								</label>
						</div>

						<div class="field">
							<label class="label">Project Budget</label>
							<div class="control">
								<input class="input" type="text" name="budget" placeholder="Project budget" required />
							</div>
						</div>

						<div class="field">
							<label class="label">Time frame</label>
							<div class="control">
								<input class="input" type="text" name="time_frame" placeholder="Time frame" required />
							</div>
						</div>

						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input class="input" type="email" name="email" placeholder="Email" required />
							</div>
						</div>

						<div class="field">
							<label class="label">Phone number</label>
							<div class="control">
								<input class="input" type="phone" name="phone_number" placeholder="Phone #" required />
							</div>
						</div>

						<div class="field">
							<label class="label">Best way to contact you?</label>
						<div class="control">
							<label class="radio">
								<input type="radio" name="question" value="phone" />
								Phone
							</label>
							<label class="radio">
								<input type="radio" name="question" value="email"/>
								Email
							</label>
						</div>
						</div>



						<button className="btn btn--dark" type="submit">
							Submit
						</button>

						</form>

					</div>
				</div>
			</div>
		</section>
	</Layout>
)

export default Contact