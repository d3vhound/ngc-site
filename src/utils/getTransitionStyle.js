const getTransitionStyles = timeout => {
  return {
    exiting: {
      transform: 'translateY(0vh)',
      transition: `transform ${timeout}ms ease`,
    },
    exited : {
      transform: 'translateY(0vh)',
      transition: `all ${timeout}ms ease`,
    },
    entering: {
      transition: `all ${timeout}ms ease`,
      transform: 'translateY(-100vh)',
    },
    entered: {
      transform: 'translateY(100vh)',
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle