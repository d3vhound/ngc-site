const getTransitionStyles = timeout => {
  return {
    exiting: {
      opacity: 0,
      overflow: 'hidden',
      transition: `all ${timeout * 2}ms ease`,
    },
    exited: {
      opacity: 0,
      overflow: 'hidden',
			transition: `all ${timeout * 2}ms ease`,
    },
    entering: {
			transition: `all ${timeout * 2}ms ease`,
      overflow: 'hidden',
    },
    entered: {
      opacity: 1,
			transition: `all ${timeout * 2}ms ease`,
      overflow: 'auto',
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle