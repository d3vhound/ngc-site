import React, { Component } from 'react'
import MainHero from '../components/MainHero'
import InfoSection from '../components/InfoSection'
import Layout from '../components/layout'

class IndexPage extends Component {
  render () {
    return (
    <Layout>
      <MainHero title="NextGen Code Company" subtitle="We Specialize Software Development"/>
      <InfoSection />
    </Layout>
    )
  }
}

export default IndexPage