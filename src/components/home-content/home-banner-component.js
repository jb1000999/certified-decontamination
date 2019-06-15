import React, {Component} from 'react';

import HomeServices from '../home-content/home-services-component';
import background
  from '../../../static/assets/pictures/banner-photo/banner-photo.jpg';

export default class HomeBanner extends Component {
  render () {
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
          <HomeServices />
        </div>
      </div>
    );
  }
}
