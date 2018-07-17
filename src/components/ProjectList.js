import React, { Component } from 'react';
import WaypointWrapper from './WaypointWrapper'
import Img from 'gatsby-image';

class ProjectList extends Component {
  render() {
    return (
      <WaypointWrapper>
        <div className="illu illu-right">
					<div className="bg bg-right">
						<img alt="project bg background" src={this.props.backgroundImage} />
					</div>
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