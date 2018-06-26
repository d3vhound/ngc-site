const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      transform: `translateY(0vh)`
    },
    entered: {
      transition: `all ${timeout}ms ease`,
      opacity: 1,
    },
    exiting: {
      transition: `all ${timeout}ms ease`,
      opacity: 0,
      transform: 'translateY(-100vh)',
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle