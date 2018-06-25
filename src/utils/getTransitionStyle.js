const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle