import React, { Component } from 'react'
import MainHero from '../components/MainHero'
import InfoSection from '../components/InfoSection'
import ChatIO from 'react-chatio'
import Layout from '../components/layout'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      appIsMounted: false 
    };
  }

  componentDidMount() {
    this.setState({
      appIsMounted: false
    })
  }

  
  render () {
    const chat = this.state.appIsMounted
    return (
    <Layout>
      <MainHero />
      <InfoSection />
      {chat ? <ChatIO license={9881965} />  : null}
    </Layout>
    )
  }
}

export default IndexPage