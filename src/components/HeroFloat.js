import React from 'react'

export default (props) => (
  <section className="hero wrapper flex-2-col">
    <div className="h-text-container">
      <h1 className="hero-title">NextGen Code Company</h1>
      <p className="hero-text p-large">Left</p>
      <button onClick={props.onClick}>Get started</button>
    </div>
    <div className="h-right-container">
      <p>Right</p>
    </div>
  </section>
)