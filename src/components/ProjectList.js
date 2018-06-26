import React, { Component } from 'react';
import WaypointWrapper from './WaypointWrapper'

class ProjectList extends Component {
  render() {
    return (
      <WaypointWrapper>
        <div className="illu illu-right">
          <div className="bg bg-left">
            <img alt="project bg background" src={this.props.backgroundImg || "https://source.unsplash.com/user/erondu/1600x900"} />
          </div>
        </div> 
        <div className="container">
          <div className="columns">
            {this.props.children}
          </div>
        </div>
      </WaypointWrapper>
    )
  }
}

export default ProjectList