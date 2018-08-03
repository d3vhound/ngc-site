import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SubHero from '../components/SubHero'
import Layout from '../components/layout'
// import ProjectDetail from '../components/ProjectDetail'
import Helmet from 'react-helmet'
import Img from 'gatsby-image';


class Project extends Component {
  render() {
		const { title, type, content, logo, mockup, mockup2,  metaDescription, mockups, backgrounds } = this.props.data.contentfulProject
		
		console.log(typeof mockups, typeof backgrounds)

    return (
      <Layout>
				<Helmet
					title={`${title} Project | NextGen Code Company`}
					meta={[
						{ name: 'description', content: {metaDescription} },
					]}
				/>
        <SubHero title={title} subtitle={type} classes/>
        <section className="section">
          <div className="container">
            <div className="columns is-desktop">
              <div className="column">
                <div className="client-logo">
                  <img width="100%" src={logo.resolutions.src} alt="client logo"/>
                </div>
              </div>
              <div className="column">
                <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Img style={{overflow: 'visible'}} backgroundColor={'transparent'} sizes={mockup.sizes} alt={title + " project image"} />
              </div>
              <div className="column">
                <Img style={{overflow: 'visible'}} backgroundColor={'transparent'} sizes={mockup2.sizes} alt={title + " project image"} />
              </div>
            </div>
          </div>
        </section>

				{/* <ProjectDetail mockups={mockups} backgrounds={backgrounds} /> */}

      </Layout>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project

export const pageQuery = graphql`
  query projectQuery($slug: String!) {
    contentfulProject(slug: {eq: $slug}) {
      title
			type
      slug
			metaDescription
      logo {
        resolutions(width: 500) {
          width
          height
          src
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      mockup {
        resolutions(width: 800) {
          width
          height
          src
        }
				sizes(maxWidth: 800) {
					...GatsbyContentfulSizes_withWebp
				}
      }
      mockup2 {
        resolutions(width: 800) {
          width
          height
          src
        }
				sizes(maxWidth: 800) {
					...GatsbyContentfulSizes_withWebp
				}
      }
    }
  }
`
