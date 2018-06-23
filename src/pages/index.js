import React, { Component } from 'react'
import HeroAB from '../components/Hero'
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
      appIsMounted: true
    })
  }

  
  render () {
    const chat = this.state.appIsMounted
    return (
    <Layout>
      <HeroAB />
      { chat ? ( <ChatIO license={9881965} /> ) : null }
    </Layout>
    )
  }
}

export default IndexPage