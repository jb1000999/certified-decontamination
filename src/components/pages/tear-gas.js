import React, {Component} from 'react';

import HomeServices from '../home-content/services-component';

export default class TearGas extends Component {
  render () {
    return (
      <div>
        <h1>Tear gas</h1>

        <div className="services-component">
          <HomeServices />
        </div>
      </div>
    );
  }
}
