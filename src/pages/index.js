import React from 'react'
import HeroAB from '../components/Hero'
import InfoSection from '../components/InfoSection'
import ChatIO from 'react-chatio'
import Layout from '../components/layout'

const IndexPage = () => ( 
  <Layout>
    <HeroAB />
    <InfoSection />
    <ChatIO license={9881965} />
  </Layout>
)

export default IndexPage