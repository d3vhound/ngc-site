import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby' 
import Helmet from 'react-helmet'
import { StaticQuery } from "gatsby"
import Nav from './Nav'
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './header'
import Footer from './Footer'
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
        <ParallaxProvider>
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
        </Helmet>
        <Nav />
        <Header siteTitle={data.site.siteMetadata.title} />
        

          <TransitionTwo>
          <div id="body">
            {children}
          </div>
          </TransitionTwo>

          <Footer />
          </ParallaxProvider>
        
      </React.Fragment>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.element.isRequired,
// }

export default Layout