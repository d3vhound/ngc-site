import React from 'react'
import FloatingProjects from './FloatingProjects'

export default (props) => (
  <section class="section herov2">
    <div class="container" >
      <div class="columns">

        <div class="column">
          <h1 class="hero-title">NextGen Code Company</h1>
          <p class="hero-text p-large">
            We build apps
          </p>
          <button onClick={props.onClick}>Get started</button>
        </div>

        <div class="column">
          <FloatingProjects />
        </div>

      </div>
    </div>
  </section>
)