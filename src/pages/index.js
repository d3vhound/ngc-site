import React, { Component } from 'react'
import MainHero from '../components/MainHero'
import InfoSection from '../components/InfoSection'
import Layout from '../components/layout'

class IndexPage extends Component {
  render () {
    return (
    <Layout>
      <MainHero title="NextGen Code Company" subtitle="We specialize in developing cost-effective applications for businesses around the world"/>
      <InfoSection />
    </Layout>
    )
  }
}

export default IndexPage