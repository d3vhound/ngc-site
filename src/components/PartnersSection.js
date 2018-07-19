import React, { Component } from 'react'
import Slider from "react-slick";

class PartnersSection extends Component {
	render() {

		const settings = {
      dots: false,
      infinite: false,
			speed: 500,
			arrows: false,
      slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true
		};
		
		return (
			<section className="section">
				<div className="container">
					<h1>Our Partners</h1>
					<Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
      		</Slider>
				</div>
			</section>
		)
	}
}

export default PartnersSection