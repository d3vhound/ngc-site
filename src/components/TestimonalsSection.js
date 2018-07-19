import React, { Component } from 'react'

class TestimonalsSection extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<h1>Testimonals</h1>
					{this.props.children}
				</div>
			</section>
		)
	}
}

export default TestimonalsSection