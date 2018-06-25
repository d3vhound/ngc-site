import React from 'react'
import { Link } from 'gatsby'
import SubHero from '../components/SubHero'

import Layout from '../components/layout'

const Projects = () => (
  <Layout>
    <SubHero title="Projects" subtitle="" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects