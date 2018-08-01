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
			// reach: true,
      section: true,
      project_section: true
		})

    return (
      <Waypoint topOffset='100px' onEnter={({event}) => {
				console.log(window, event)

				this.setState({
					inView: true
				})
				
			}}>
        <div className={ReachStyles}>
          {this.props.children}
        </div>
      </Waypoint>
    )
  }
}

export default WaypointWrapper