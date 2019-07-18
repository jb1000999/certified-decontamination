import React, {Component} from 'react';

import HomeServices from '../home-content/services-component';

export default class Mold extends Component {
  render () {
    return (
      <div className="info-page-container">
        <div className="info-banner">
          <h1>Mold</h1>
        </div>
        <div className="info-container">
          <div className="info">
            <p>
              Most of the calls we receive are from people who do not need a professional mold remediation - they just
              need a little advice so they can handle the problem themselves. The EPA recommends homeowners
              handle mold cleanup where less than 10 square feet of mold colonies are present.
            </p>
            <p>
              We follow the old, proven and true decontamination protocol for mold, which is:
            </p>
          </div>

          <div className="info-list">
            <ol type="1">
              <li>
                Control the air so the mold spores do not contaminate unaffected areas.
              </li>
              <li>Remove the mold colonies.</li>
              <li>
                Clean the affected areas to remove residual spores (dust) as feasible.
              </li>
              <li>Check the work by inspecting and testing.</li>
            </ol>
          </div>
        </div>

        <div className="services-component">
          <HomeServices />
        </div>
      </div>
    );
  }
}
