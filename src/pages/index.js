import React from 'react'
// import MainHero from '../components/MainHero'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
// import PartnersSection from '../components/PartnersSection'
// import TestimonalsSection from '../components/TestimonalsSection'
import Layout from '../components/layout'
import Button from '../components/Button'
import { graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image';
import USASection from '../components/USASection'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types';

const ProjectSections = ({ node}) => {
  return (
		<ProjectList backgroundImg={node.backgroundImage}>
    <div className="column center-content is-one-third">
      <h1 className="project-title">{node.title}</h1>
      <h2 className="project-type">{node.type || "Project Type"}</h2>
      <Button to={'/projects/' + node.slug} color="dark" text="More info"/>
    </div>
    <Parallax
      className="column image-column"
      offsetYMax={40}
      offsetYMin={0}

		>
		<div className="column image-column">
        <Img imgStyle={{ objectFit: 'contain' }} style={{overflow: 'visible'}} backgroundColor={'transparent'} className="project-image" sizes={node.mockup.sizes} alt={node.title + " project image"} />
				{/* <img className="project-image" style={{overflow: 'visible'}} src={node.mockup.sizes.src} alt={node.title + " project image"}/> */}
		</div>
    </Parallax>
    </ProjectList>
  )
}


const IndexPage = ({data}) => (
  <Layout>
    <Hero headerImage={data.headerImage}/>
		<Helmet
			title="Home | NextGen Code Company"
			meta={[
				{ name: 'description', content: 'Software development agency.' },
			]}
		/>
		{/* <PartnersSection /> */}
    <InfoSection />

			{data.allContentfulProject.edges.map((edge) => <ProjectSections key={edge.node.title} node={edge.node} />)}
			<div className="project-button-wrapper">
				<Button to="/projects" color="dark" text="View More Projects"/>
			</div>
			<USASection />
			{/* <TestimonalsSection /> */}
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
						resolutions(width: 1080) {
							width
							height
							src
						}
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp
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
