import React, {Component} from 'react';

import HomeServices from '../home-content/services-component';

export default class Mold extends Component {
  render () {
    return (
      <div>
        <h1>Mold</h1>

        <div className="services-component">
          <HomeServices />
        </div>
      </div>
    );
  }
}
