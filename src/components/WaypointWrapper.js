import React from 'react'
import Waypoint from 'react-waypoint';
import classNames from 'classnames'

class WaypointWrapper extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      inView: false
    }
  }

  addReach = () => {
    this.setState({
      inView: true
    })
  }

  render() {

    const ReachStyles = classNames({
      reach: this.state.inView,
      section: true,
      project_section: true
    }) 

    return (
      <Waypoint bottomOffset={350} onEnter={this.addReach}>
        <div className={ReachStyles}>
          {this.props.children}
        </div>
      </Waypoint>
    )
  }
}

export default WaypointWrapper