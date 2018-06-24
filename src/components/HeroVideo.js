import React from 'react'

export default (props) => (
  <section className="section herov2">
    <div className="container has-text-centered" >
      <div className="columns">

        <div className="column">
          <h1 className="hero-title">NextGen Code Company</h1>
          <p className="hero-text p-large">
            We build apps
          </p>
          <button onClick={props.onClick}>Get started</button>
        </div>


      </div>
    </div>
  </section>
)