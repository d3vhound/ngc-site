import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby' 
import Helmet from 'react-helmet'
import { StaticQuery } from "gatsby"
import Nav from './Nav'
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './header'
import Footerv2 from './Footerv2'
import USASection from './USASection'
import '../assets/css/index.scss'
import Transition from '../components/transition'
import TransitionTwo from '../components/transition2'


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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          >
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
				<link rel="shortcut icon" href="../assets/images/favicon.ico" />
				<link rel="apple-touch-icon" href="../assets/images/apple-touch-icon.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="../assets/images/apple-touch-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="../assets/images/apple-touch-icon-114x114.png" />
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
					
					<USASection />
          <Footerv2 />
        
      </React.Fragment>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.element.isRequired,
// }

export default Layout