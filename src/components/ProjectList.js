import React, { Component } from 'react';
import WaypointWrapper from './WaypointWrapper'

class ProjectList extends Component {
  render() {
    return (
      <section className={this.props.classes}>
        <WaypointWrapper>
          <div className="columns">
            {this.props.children}
          </div>
        </WaypointWrapper>
      </section>
    )
  }
}

export default ProjectList