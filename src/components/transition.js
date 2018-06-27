import React from "react"
import { Transition as ReactTransition } from "react-transition-group"
import getTransitionStyle from "../utils/getTransitionStyle"
import getTransitionDelay from "../utils/getTransitionDelay"
import { historyExitingEventType, timeout, } from "../../gatsby-browser"

class Transition extends React.Component {
  constructor(props) {
    super(props)
    this.state = { exiting: false }
    this.listenerHandler = this.listenerHandler.bind(this)
  }

  listenerHandler(event) {
    this.setState({ exiting: true })
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler)
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler)
  }

  static getDerivedStateFromProps({ exiting }) {
    if (exiting) {
      return { exiting: false }
    }
    return null
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: timeout,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
    }

    return (
      <>
      <ReactTransition {...transitionProps}>
        {status => (
          <>
          <div className="overlay-container"
            style={{
              ...getTransitionStyle({ status, timeout }),
            }}
          >
            {this.props.children}
          </div>
            <div className="overlay-container"
            style={{
              ...getTransitionDelay({ status, timeout }),
            }}
          >
            <div className="base-overlay ng-two"></div>
          </div>
          </>
        )}
      </ReactTransition>
      </>
    )
  }
}

export default Transition