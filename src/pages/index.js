import React from 'react'
import MainHero from '../components/MainHero'
import InfoSection from '../components/InfoSection'
import Layout from '../components/layout'
import Button from '../components/Button'
import { graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'
import { Parallax } from 'react-scroll-parallax';

const ProjectSections = ({ node }) => {
  return (
    <ProjectList backgroundImg={node.backgroundImage.resolutions.src || null}>
    <div className="column center-content is-one-third">
      <h1 className="project-title">{node.title}</h1>
      <h2 className="project-type project-type-underline">{node.type || "Project Type"}</h2>
      <p className="project-short-desc">{node.shortDescription || "Test"}</p>
      <Button to={'/projects/' + node.slug} color="dark" text="More info"/>
    </div>
    <Parallax
      className="column image-column"
      offsetYMax={10}
      offsetYMin={20}
      
    >
      <img className="project-image" alt={node.title + " project image"} src={node.mockup.resolutions.src} />
    </Parallax>
    </ProjectList>
  )
}

const IndexPage = ({data}) => (
  <Layout>
    <MainHero title="NextGen Code Company" subtitle="We are a software development agency that specializes in developing cost-effective apps for small businesses around the world."/>
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
          type
          backgroundImage {
            resolutions(width: 2560) {
              width
              height
              src
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
    }
  }
`