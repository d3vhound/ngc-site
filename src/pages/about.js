import React from 'react'
import SubHero from '../components/SubHero'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <SubHero title="About" subtitle="" />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>Our Vision</h1>
            <p>To improve every facet of business with coding solutions by integrating the latest technologies into our solutions.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>Our Mission</h1>
            <p>To Code; Yes, it's that simple.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>Who We Are</h1>
            <p>NextGen Code Company is comprised of highly skilled technology geeks. Besides regular Taco Tuesday outings, the NextGen team is usually found grinding away at the current project at hand. With unmatched work ethic and technical abilities it is hard to compete with such a team. The company was founded by two Texas Tech University Graduates who maintained succesful freelancing careers prior to NextGen. After working on several projects together the two decided to take their unique approach to business solutions to the next level. The current team is now able to produce big business solutions at small business prices without sacrificing quality. The company focuses on perfecting their own inner operations allowing them to develop software more efficiently than industry peers. NextGen is an industry leader by bringing in a new age of code solutions to several markets. With a heavy emphasis on good looks, good bones, quick production, and high performance, NextGen Code Company's software solutions have always more than satisfied clients. NextGen's intention is to build long-lasting relationships with big, medium, small, and new businesses to help them stay ahead of the competition.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About