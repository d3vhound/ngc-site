import React from 'react'

export default (props) => (
  <section className="section herov2">
    <div className="container has-text-centered" >
      <div className="columns">

        <div className="column">
          <h1 className="hero-title">NextGen Code Company</h1>
          <h2>Innovative Software Development</h2>
          <button onClick={props.onClick}>Get started</button>
        </div>


      </div>
    </div>
  </section>
)