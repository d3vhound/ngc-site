/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it

import createHistory from "history/createBrowserHistory"

const timeout = 1000
const historyExitingEventType = `history::exiting`
const historyEnteringEventType = `history::entering`

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } })
  window.dispatchEvent(event)
  setTimeout(() => {
    callback(true)
  }, timeout)
}

let history
if (typeof document !== 'undefined') {
  history = createHistory({ getUserConfirmation })
  // block must return a string to conform
  history.block((location, action) => location.pathname)
}



export { historyExitingEventType, historyEnteringEventType, timeout, }