import React, { Component } from 'react'
import WaypointWrapper from './WaypointWrapper'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class ProjectList extends Component {
	// static contextTypes = {
  //   parallaxController: PropTypes.object.isRequired,
  // };

	// handleLoad = () => {
	// 	// updates cached values after image dimensions have loaded
	// 	this.context.parallaxController.update();
	// };

  render() {
    return (
			<WaypointWrapper>
        <div className="illu illu-right">
					{/* <div className="bg bg-right">
						<img src={this.props.backgroundImg.sizes.src} />
					</div> */}
					<Img backgroundColor={'transparent'} outerWrapperClassName="bg bg-right" alt="project bg background" style={{width: '100%', height: '100%', position: 'absolute'}} sizes={this.props.backgroundImg.sizes} />
        </div> 
        <div className="container">
          <div className="columns reverse-column-order">
            {this.props.children}
          </div>
        </div>
			</WaypointWrapper>
    )
  }
}

export default ProjectList