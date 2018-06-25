import React, { Component } from 'react'

class SubHero extends Component {
  render() {
    return (
      <section className="section subhero">
        <div className="container" >
          <div className="columns">

            <div className="column">
              <h1 className="hero-title">{this.props.title}</h1>
              <p>{this.props.subtitle}</p>

            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default SubHero