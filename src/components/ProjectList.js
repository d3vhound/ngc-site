import React, { Component } from 'react';
import WaypointWrapper from './WaypointWrapper'
import Img from 'gatsby-image';

class ProjectList extends Component {
  render() {
    return (
      <WaypointWrapper>
        <div className="illu illu-right">
          <Img backgroundColor={'transparent'} outerWrapperClassName="bg bg-right" alt="project bg background" style={{width: '100%', height: '100%', position: 'absolute'}} sizes={this.props.backgroundImg} />
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