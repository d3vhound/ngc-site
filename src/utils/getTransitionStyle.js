const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      transform: `translateY(100vh)`
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0)`
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateY(-100vh)`
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle