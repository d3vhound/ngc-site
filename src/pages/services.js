import React from 'react'
import SubHero from '../components/SubHero'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import BGimg1 from '../assets/images/services_bgs/bg1.jpg'
import BGimg2 from '../assets/images/services_bgs/bg2.jpg'
import BGimg3 from '../assets/images/services_bgs/bg3.jpg'
import BGimg4 from '../assets/images/services_bgs/bg4.jpg'
import BGimg5 from '../assets/images/services_bgs/bg5.jpg'
import BGimg6 from '../assets/images/services_bgs/bg6.jpg'
import BGimg7 from '../assets/images/services_bgs/bg7.jpg'
import BGimg8 from '../assets/images/services_bgs/bg8.jpg'
import BGimg9 from '../assets/images/services_bgs/bg9.jpg'
import BGimg10 from '../assets/images/services_bgs/bg10.jpg'

import Button from '../components/Button'
import Helmet from 'react-helmet'
import ATVParallax from 'react-atv-parallax'

class Services extends React.Component {
  static propTypes = {
    isStatic: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
  }

  render() {
    return (
      <Layout>
        <Helmet
          title="Services | NextGen Code Company"
          meta={[
            {
              name: 'description',
              content:
                "Website's, SEO, search engine optimization, mobile app's, web applications, UI UX design, and more.",
            },
          ]}
        />
        <SubHero title="Services" subtitle="" />
        <section className="section">
          <div className="container">
            <h1>Some services we offer...</h1>
          </div>
        </section>

        <section className="section">
          <div className="container ng-services-container">
            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg1} />
                <div className="ng-services-card-title">
                  <span>Websites</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg2} />
                <div className="ng-services-card-title">
                  <span>SEO</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg3} />
                <div className="ng-services-card-title">
                  <span>Mobile Apps</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg4} />
                <div className="ng-services-card-title">
                  <span>E-Commerce</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg5} />
                <div className="ng-services-card-title">
                  <span>Web Apps</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg6} />
                <div className="ng-services-card-title">
                  <span>Code Consulting</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg7} />
                <div className="ng-services-card-title">
                  <span>Shopify</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg8} />
                <div className="ng-services-card-title">
                  <span>General IT Consulting</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg9} />
                <div className="ng-services-card-title">
                  <span>UI/UX Design</span>
                </div>
              </ATVParallax>
            </div>

            <div className="ng-services-card-container">
              <ATVParallax style={{ width: 320, height: 190 }}>
                <img src={BGimg10} />
                <div className="ng-services-card-title">
                  <span>Startup Guidance</span>
                </div>
              </ATVParallax>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3>To find out more about these, reach out to us.</h3>
            <h1>Don't be shy!</h1>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Services
