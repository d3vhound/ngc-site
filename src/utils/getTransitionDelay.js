const getTransitionStyles = timeout => {
  return {
    exiting: {
      transform: 'translateX(0vw)',
      transition: `all 300ms ease-out`,
    },
    exited: {
      transform: 'translateX(0vw)',
      transition: `all 300ms ease-out`,
    },
    entering: {
      transition: `all 300ms ease-out`,
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