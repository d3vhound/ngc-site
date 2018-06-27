const getTransitionStyles = timeout => {
  return {
    exiting: {
      transform: 'translateX(0vw) skewX(0deg)',
      transition: `all 500ms ease`,
    },
    exited: {
      transform: 'translateX(0vw) skewX(0deg)',
      transition: `all 500ms ease`,
    },
    entering: {
      transition: `all 600ms ease`,
      transform: 'translateX(-100vw) skewX(-20deg)',
    },
    entered: {
      transform: 'translateX(200vw) skewX(-40deg)',
    },
  }
}

const getTransitionDelay = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionDelay