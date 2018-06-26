import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby' 
import Helmet from 'react-helmet'
import { StaticQuery } from "gatsby"
import Nav from './Nav'
import Transition from './transition'
import Header from './header'
import '../assets/css/index.scss'

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
        
        
        
        <Transition>
        {children}
        </Transition>
        
      </React.Fragment>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.element.isRequired,
// }

export default Layout