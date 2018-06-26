import React, { Component } from 'react';
import WaypointWrapper from './WaypointWrapper'
import Img from 'gatsby-image';

class ProjectList extends Component {
  render() {
    return (
      <WaypointWrapper>
        <div className="illu illu-right">
          <div className="bg bg-right">
            <Img backgroundColor={'#ffffff'} alt="project bg background" sizes={this.props.backgroundImg} />
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