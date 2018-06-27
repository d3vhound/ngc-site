import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SubHero from '../components/SubHero'
import Layout from '../components/layout'

class Project extends Component {
  render() {
    const { title, content, mockup } = this.props.data.contentfulProject

    return (
      <Layout>
        <SubHero title={title} subtitle="" classes/>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">Logo</div>
              <div className="column"></div>
            </div>
            <div className="columns">
              <div className="column">
                <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
              </div>
              <div className="column"></div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <img width="100%" alt="main project mockup" src={mockup.resolutions.src} />
              </div>
              <div className="column">
                <img width="100%" alt="main project mockup" src={mockup.resolutions.src} />
              </div>
            </div>
          </div>
        </section>
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
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      mockup {
        resolutions(width: 1080) {
          width
          height
          src
        }
      }
    }
  }
`