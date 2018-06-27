const getTransitionStyles = timeout => {
  return {
    exiting: {
      transform: 'translateX(0vw)',
      transition: `all 300ms linear`,
    },
    exited: {
      transform: 'translateX(0vw)',
      transition: `all 300ms linear`,
    },
    entering: {
      transition: `all 300ms linear`,
      transform: 'translateX(-100vw)',
    },
    entered: {
      transform: 'translateX(100vw)',
    },
  }
}

const getTransitionDelay = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionDelay