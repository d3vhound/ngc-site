import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    return (
      <section className={this.props.classes}>
        <div className="container">
          <div className="columns">
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectList