import React from "react"
import { Transition as ReactTransition } from "react-transition-group"
import getTransitionStyle from "../utils/getTransitionStyle"
import getTransitionDelay from "../utils/getTransitionDelay"
import { historyExitingEventType, timeout, } from "../../gatsby-browser"
import Tango from '../assets/images/tango.svg'

const Messages = [
	"Switching to the latest JS framework...",
	"Downloading more RAM..",
	"Alt-F4 speeds things up.",
	"Distracted by cat gifs",
	"Updating to Windows Vista...",
	"TODO: Insert elevator music",
	"Reading Terms and Conditions for you.",
	"How about this weather, eh?"
]

class Transition extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
			exiting: false,
			message: "" 
		}
    this.listenerHandler = this.listenerHandler.bind(this)
  }

  listenerHandler(event) {

		let rand = Messages[Math.floor(Math.random() * Messages.length)]

		this.setState({ 
			exiting: true,
			message: rand 
		})
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
            <div className="base-overlay ng-two">
							<div className='ng-transition-tango'>
								<div className='ng-bubble-small'></div>
								<div className='ng-bubble-medium'></div>
								<div className='ng-tango-bubbles-home ng-tango-bubble'>
									{this.state.message}
								</div>
								<img alt="Tango" src={Tango} />
							</div>
						</div>
          </div>
          </>
        )}
      </ReactTransition>
      </>
    )
  }
}

export default Transition
