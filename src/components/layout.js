import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { StaticQuery } from "gatsby"
import Nav from './Nav'
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './header'
import Footerv2 from './Footerv2'
// import USASection from './USASection'
import '../assets/css/index.scss'
import Transition from '../components/transition'
import TransitionTwo from '../components/transition2'
import Favicon from '../assets/images/favicon.ico'
import Favicon_touch from '../assets/images/apple-touch-icon.png'
import Favicon_touch2 from '../assets/images/apple-touch-icon-72x72.png'
import Favicon_touch3 from '../assets/images/apple-touch-icon-114x114.png'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Transition>
          <div className="base-overlay">
          </div>
        </Transition>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Software development agency.' },
          ]}
          >
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
				<link rel="shortcut icon" href={Favicon} />
				<link rel="apple-touch-icon" href={Favicon_touch} />
				<link rel="apple-touch-icon" sizes="72x72" href={Favicon_touch2} />
				<link rel="apple-touch-icon" sizes="114x114" href={Favicon_touch3} />
        </Helmet>
        <Nav />
        <Header />


          <TransitionTwo>
          	<ParallaxProvider>
							<div id="body">
								{children}
							</div>
          	</ParallaxProvider>
          </TransitionTwo>

          <Footerv2 />
      </React.Fragment>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.element.isRequired,
// }

export default Layout
