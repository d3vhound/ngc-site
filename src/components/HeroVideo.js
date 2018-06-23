import React from 'react'
import FloatingProjects from './FloatingProjects'

export default (props) => (
  <React.Fragment>
  {/* <section className="hero wrapper flex-2-col">
    <div className="h-text-container">
      <h1 className="hero-title">Video</h1>
      <p className="hero-text p-large">Left</p>
      <button onClick={props.onClick}>Get started</button>
    </div>
    <div className="h-right-container">
      <p>Right</p>
    </div>
  </section> */}
  <section class="hero is-medium">
  <div className="hero-body">
    <div class="container">
      <div class="columns">

        <div class="column">
          <h1 class="hero-title">NextGen Code Company</h1>
          <h2 class="hero-text p-large">
            We build apps
          </h2>
          <button onClick={props.onClick}>Get started</button>
        </div>

        <div class="column">
          <FloatingProjects />
        </div>

      </div>

      

    </div>
  </div>
  </section>
  </React.Fragment>
)