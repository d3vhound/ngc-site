import React from 'react'
import MainHero from '../components/MainHero'
import InfoSection from '../components/InfoSection'
import Layout from '../components/layout'
import Button from '../components/Button'
import { graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'
// import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';

const ProjectSections = ({ node }) => {
  return (
    <ProjectList backgroundImg={node.backgroundImage.sizes}>
    <div className="column center-content is-one-third">
      <h1 className="project-title">{node.title}</h1>
      <h2 className="project-type project-type-underline">{node.type || "Project Type"}</h2>
      <p className="project-short-desc">{node.shortDescription || "Test"}</p>
      <Button to={'/projects/' + node.slug} color="dark" text="More info"/>
    </div>
    {/* <Parallax
      className="column image-column"
      offsetYMax={40}
      offsetYMin={0}
     
		> */}
		<div className="column image-column">
        <Img imgStyle={{ objectFit: 'contain' }} backgroundColor={'transparent'} className="project-image" sizes={node.mockup.sizes} alt={node.title + " project image"} />
		</div>
    {/* </Parallax> */}
    </ProjectList>
  )
}

const IndexPage = ({data}) => (
  <Layout>
    <MainHero title="NextGen Code Company" subtitle="We are a software development agency that specializes in developing cost-effective apps for small businesses around the world."/>
    <InfoSection />
    
			{data.allContentfulProject.edges.map((edge) => <ProjectSections key={edge.node.title} node={edge.node} />)}
			<div className="project-button-wrapper">
				<Button to="/projects" color="dark" text="View More Projects"/>
			</div>
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
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          mockup {
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`