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
							
								var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
								
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
