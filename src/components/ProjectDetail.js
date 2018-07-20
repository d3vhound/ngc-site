import React, { Component } from 'react'

class ProjectDetail extends Component {

	constructor(props) {
    super(props)
    this.state = { 
			sections: [] 
		}
  }

	componentDidMount() {
		const mockups = this.props.mockups
		const backgrounds = this.props.backgrounds
		const sectionArr = this.state.sections
		
		mockups.forEach((v,i) => {
			let obj = {}
			obj.meta = v;
			obj.value = backgrounds[i];
			sectionArr.push(obj)
		})

		console.log(this.state.sections.length)
	}


	render() {

		return (
			<section className="section">
				<div className="container">

					{this.state.sections.length !== 0 ? this.state.sections.map((detail) => {
						console.log(detail)
						return (

							<section className="section">
								<div className="container">
									<img src={detail.meta.resolutions.src} />
									<img src={detail.value.resolutions.src} />
								</div>
							</section>
							
						)
					}) : <h1>Loading...</h1>}

				</div>
			</section>
		)
	}
}

export default ProjectDetail