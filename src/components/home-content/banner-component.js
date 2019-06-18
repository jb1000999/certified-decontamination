import React from 'react';

import Services from './services-component';
import background
  from '../../../static/assets/pictures/banner-photo/banner-photo.jpg';

export default function HomeBanner () {
  return (
    <div className="banner-container">
      <div className="banner">
        <img src={background} />

        <h2>
          <span>
            Certified Decontamination: <br />
            Your friend in the meth business
          </span>
        </h2>
      </div>

      <div className="home-services">
        <Services />
      </div>
    </div>
  );
}
