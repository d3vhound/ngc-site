import React from 'react'
import { Link } from 'gatsby'
import SubHero from '../components/SubHero'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <SubHero title="Contact" subtitle="" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact