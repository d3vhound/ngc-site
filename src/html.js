import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
					{this.props.postBodyComponents}

					<script dangerouslySetInnerHTML={{
    				__html: `
            	(function() {
								/* Add this class to any elements you want to use to open Drift.
								*
								* Examples:
								* - <a class="drift-open-chat">Questions? We're here to help!</a>
								* - <button class="drift-open-chat">Chat now!</button>
								*
								* You can have any additional classes on those elements that you
								* would ilke.
								*/
								var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
								/* http://youmightnotneedjquery.com/#ready */
								function ready(fn) {
									if (document.readyState != 'loading') {
										fn();
									} else if (document.addEventListener) {
										document.addEventListener('DOMContentLoaded', fn);
									} else {
										document.attachEvent('onreadystatechange', function() {
											if (document.readyState != 'loading')
												fn();
										});
									}
								}
								/* http://youmightnotneedjquery.com/#each */
								function forEachElement(selector, fn) {
									var elements = document.querySelectorAll(selector);
									for (var i = 0; i < elements.length; i++)
										fn(elements[i], i);
								}
								function openSidebar(driftApi, event) {
									event.preventDefault();
									driftApi.sidebar.open();
									return false;
								}
								ready(function() {
									drift.on('ready', function(api) {
										var handleClick = openSidebar.bind(this, api)
										forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
											el.addEventListener('click', handleClick);
										});
									});
								});
							})();
        		`,
  				}} />
					
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
