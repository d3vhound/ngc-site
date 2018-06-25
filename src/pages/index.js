import React from 'react'
import MainHero from '../components/MainHero'
import InfoSection from '../components/InfoSection'
import Layout from '../components/layout'
import Button from '../components/Button'
import { graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'

const ProjectSections = ({ node }) => {
  return (
    <ProjectList classes="section project-section">
    <div className="column center-content is-one-third">
      <h1 className="project-title">{node.title}</h1>
      <h2 className="project-type project-type-underline">{node.type || "Project Type"}</h2>
      <Button to={'/projects/' + node.slug} color="dark" text="More info"/>
    </div>
    <div className="column image-column">
      <img className="project-image" alt={node.title + " project image"} src={node.mockup.resolutions.src} />
    </div>
    </ProjectList>
  )
}

const IndexPage = ({data}) => (
  <Layout>
    <MainHero title="NextGen Code Company" subtitle="We specialize in developing cost-effective applications for businesses around the world"/>
    <InfoSection />
    
      {data.allContentfulProject.edges.map((edge) => <ProjectSections key={edge.node.title} node={edge.node} />)}
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    allContentfulProject(limit: 3, filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          title
          slug
          mockup {
            resolutions(width: 1080) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`