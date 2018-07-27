import React from 'react'
import { graphql } from 'gatsby'
import SubHero from '../components/SubHero'
import Layout from '../components/layout'
import ProjectList from '../components/ProjectList'
import Button from '../components/Button'
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';
import Helmet from 'react-helmet'

const ProjectSections = ({ node }) => {
  return (
    <ProjectList backgroundImg={node.backgroundImage} classes="section project-section">
      <div className="column center-content is-one-third">
        <h1 className="project-title">{node.title}</h1>
        <h2 className="project-type">{node.type || "Project Type"}</h2>
        <Button to={'/projects/' + node.slug} color="dark" text="More info" />
      </div>
      <Parallax
        className="column image-column"
        offsetYMax={-20}
        offsetYMin={10}
        slowerScrollRate
			>
			<div className="column image-column">
        <Img imgStyle={{ objectFit: 'contain' }} style={{ overflow: 'visible' }} backgroundColor={'transparent'} className="project-image" sizes={node.mockup.sizes} alt={node.title + " project image"} />
			</div>
      </Parallax>
    </ProjectList>
  )
}

const Projects = ({data}) => (
  <Layout>
		<Helmet
			title="Projects | NextGen Code Company"
			meta={[
				{ name: 'description', content: 'Software development agency.' },
			]}
		/>
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
          backgroundImage {
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp
            }
						resolutions(width: 1080) {
							width
							height
							src
						}
          }
          mockup {
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`