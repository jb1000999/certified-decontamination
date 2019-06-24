import React from 'react';
import Banner from '../home-content/banner-component';
import Services from '../home-content/services-component';

export default function () {
  return (
    <div className="home-container">
      <div className="banner">
        <Banner />
      </div>
      <div className="services-container">
        <Services />
      </div>
    </div>
  );
}
