import React from 'react';
import Button from '../components/Button';
import LazyLoad from 'react-lazy-load';

export default () => (
  <section className="section info-section">
    <div className="container" style={{marginBottom: '3rem', zIndex: '3',}}>
      <div className="columns">

        <div className="column">
          <h1 className="hero-title">What we do</h1>
          <p>
            Spicy jalapeno bacon ipsum dolor amet pork belly cow sausage pancetta, landjaeger prosciutto meatball picanha hamburger short ribs tenderloin biltong porchetta beef. Meatloaf tenderloin ball tip, brisket pork ground round pork belly sausage prosciutto bresaola drumstick chicken.
          </p>
        </div>

        <div className="column">
          <div className="corner-img">
            <div className="img-frame" style={{ paddingBottom: '71%' }}>
              <LazyLoad height={580} offsetVertical={300}>
              <img className="corner-img-child" src="https://res.cloudinary.com/devhound/image/upload/c_fill,f_auto,g_center,h_571,q_auto,w_800/v1529929438/zany-jadraque-571205-unsplash_auoson.jpg" width="800" height="571" alt="info section 1" />
              </LazyLoad>
            </div>
          </div>
          <div className="corner-img">
            <div className="img-frame" style={{paddingBottom: '71%'}}>
              <LazyLoad height={580} offsetVertical={300}>
              <img className="corner-img-child" src="https://res.cloudinary.com/devhound/image/upload/c_fill,f_auto,h_571,q_auto,w_800/v1529929623/About_Us_Office-25_rwbiqn.jpg" width="800" height="571" alt="info section 2" />
              </LazyLoad>
            </div>
          </div>
          
        </div>

      </div>
    </div>
    <div className="container has-text-centered">
      <Button to="/process" color="dark" text="Our Process" />
    </div>
  </section>
)