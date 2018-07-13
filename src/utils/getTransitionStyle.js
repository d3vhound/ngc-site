const getTransitionStyles = timeout => {
  return {
    exiting: {
      transform: 'translateX(0vw)',
      transition: `transform ${timeout}ms ease-out`,
    },
    exited : {
      transform: 'translateX(0vw)',
      transition: `all ${timeout}ms ease-out`,
    },
    entering: {
      transition: `all ${timeout}ms ease-out`,
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