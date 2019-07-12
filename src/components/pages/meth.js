import React, {Component} from 'react';

import HomeServices from '../home-content/services-component';

export default class Meth extends Component {
  render () {
    return (
      <div className="info-page-container">
        <div className="info-banner">

          <h1>Meth</h1>
        </div>
        <div className="info-container">
          <div className="info">
            <p>
              Certified Decontamination provides a complete decontamination of dwellings, commercial buildings and vehicles. A “complete decontamination” means, we decontaminate inside of the entire HVAC system, inside drawers, cabinets, closets and unfinished rooms and other areas often skipped by some contractors. There are many absorbent materials in dwellings. If you try to wash a contaminant from an absorbent surface, it usually just soaks in deeper. Certified Decontamination uses a decontaminating formulation that can wash meth off of surfaces but can also weaken the chemical bonds of meth molecules allowing the creation of other compounds, some of which will evaporate or off-gas away. Certified Decontamination’s decontaminating formulations are made from household chemicals, the same ones used by homemakers throughout the U.S. every day. We usually decontaminate materials by phase-transfer catalysis, reduction-oxidation and alkali hydrolysis. Oxidizing building materials can cause them to create and release formaldehyde. Where needed, we add a compound to our decontaminating formulations that inhibits the formation of formaldehyde.
            </p>
          </div>
        </div>

        <div className="services-component">
          <HomeServices />
        </div>
      </div>
    );
  }
}
