import React from 'react'
import { Link } from 'gatsby'
import MainHero from '../components/MainHero'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <MainHero title="Second Page" subtitle="" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
