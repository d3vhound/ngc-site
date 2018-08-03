import React from 'react'
import SubHero from '../components/SubHero'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const Contact = () => (
	<Layout>
		<Helmet
			title="Project Discovery | NextGen Code Company"
			meta={[
				{ name: 'description', content: 'Software development agency.' },
			]}
		/>
		<SubHero title="Project Discovery" subtitle="" />
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">

						<form className="project-discovery-form" name="project_discovery" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

						<input type="hidden" name="form-name" value="project_discovery" required/>
						
						<div className="field">
							<label className="label">Name</label>
							<div className="control">
								<input className="input" type="text" name="name" placeholder="Full name" required/>
  						</div>
						</div>

						<div className="field">
							<label className="label">Business name</label>
							<div className="control">
								<input className="input" type="text" name="business_name" placeholder="Business name" required />
							</div>
						</div>

						<div className="field checkboxes">
							<label className="label">What type of services are you interested in?</label>
								<label className="checkbox">
									<input name="service" value="website" type="checkbox" />
										Website
								</label>
								<label className="checkbox">
									<input name="service" value="mobile app" type="checkbox" />
										Mobile app
								</label>
								<label className="checkbox">
									<input name="service" value="web app" type="checkbox" />
										Web app
								</label>
								<label className="checkbox">
									<input name="service" value="internal business solution" type="checkbox" />
										Internal Business Solution
								</label>
								<label className="checkbox">
									<input name="service" value="technology consulting" type="checkbox" />
									Technology Consulting
								</label>
								<label className="checkbox">
									<input type="checkbox" />
									Other
								</label>
						</div>

						<div className="field">
							<label className="label">Project Budget</label>
							<div className="control">
								<input className="input" type="text" name="budget" placeholder="Project budget" required />
							</div>
						</div>

						<div className="field">
							<label className="label">Time frame</label>
							<div className="control">
								<input className="input" type="text" name="time_frame" placeholder="Time frame" required />
							</div>
						</div>

						<div className="field">
							<label className="label">Email</label>
							<div className="control">
								<input className="input" type="email" name="email" placeholder="Email" required />
							</div>
						</div>

						<div className="field">
							<label className="label">Phone number</label>
							<div className="control">
								<input className="input" type="phone" name="phone_number" placeholder="Phone #" required />
							</div>
						</div>

						<div className="field">
							<label className="label">Best way to contact you?</label>
						<div className="control">
							<label className="radio">
								<input type="radio" name="Best way to contact" value="phone" />
								Phone
							</label>
							<label className="radio">
								<input type="radio" name="Best way to contact" value="email"/>
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