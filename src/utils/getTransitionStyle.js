const getTransitionStyles = timeout => {
  return {
    exiting: {
      transform: 'translateX(0vw)',
      transition: `transform ${timeout}ms ease`,
    },
    exited : {
      transform: 'translateX(0vw)',
      transition: `all ${timeout}ms ease`,
    },
    entering: {
      transition: `all ${timeout}ms ease`,
      transform: 'translateX(-110vw)',
    },
    entered: {
      transform: 'translateX(100vw)',
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle