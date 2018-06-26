import React from 'react'
import { graphql } from 'gatsby'
import SubHero from '../components/SubHero'
import Layout from '../components/layout'
import ProjectList from '../components/ProjectList'
import Button from '../components/Button'

const ProjectSections = ({ node }) => {
  return (
    <ProjectList classes="section project-section">
      <div className="column center-content is-one-third">
        <h1 className="project-title">{node.title}</h1>
        <h2 className="project-type project-type-underline">{node.type || "Project Type"}</h2>
        <Button to={'/projects/' + node.slug} color="dark" text="More info" />
      </div>
      <div className="column image-column">
        <img className="project-image" alt={node.title + " project image"} src={node.mockup.resolutions.src} />
      </div>
    </ProjectList>
  )
}

const Projects = ({data}) => (
  <Layout>
    <SubHero title="Projects" subtitle="" />
    {data.allContentfulProject.edges.map((edge) => <ProjectSections key={edge.node.title} node={edge.node} />)}
  </Layout>
)

export default Projects

export const ProjectQuery = graphql`
  query ProjectQuery {
    allContentfulProject(filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          title
          slug
          type
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