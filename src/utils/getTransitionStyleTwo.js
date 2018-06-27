const getTransitionStyles = timeout => {
  return {
    exiting: {
      opacity: 0,
      overflow: 'hidden',
      transition: `all 1000ms ease`,
    },
    exited: {
      opacity: 0,
      overflow: 'hidden',
      transition: `all 1000ms ease`,
    },
    entering: {
      transition: `all 1000ms ease`,
      overflow: 'hidden',
    },
    entered: {
      opacity: 1,
      transition: `all 1000ms ease`,
      overflow: 'auto',
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle