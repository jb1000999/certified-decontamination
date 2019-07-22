import React, { Component } from "react";

import HomeServices from "../home-content/services-component";

export default class TearGas extends Component {
  render() {
    return (
      <div className="info-page-container">
        <div className="info-banner">
          <h1>Tear gas</h1>
        </div>
        <div className="info-container">
          <div className="info">
            <p>
              Tear gas or “incapacitating agents” usually describes CS or CN
              chemical agent but could also refer to OC, CR or Mace. CS
              (o-chlorobenzylidene malononitrile), is used by police to remove
              hostile suspects from vehicles and buildings. The various devices
              available to police emit a vapor, smoke (from burning) or powder.
              OC (oleoresin capsicum), is commonly known as “pepper spray” and
              is also in use by police agencies throughout the U.S. CN
              (chloroacetophenone), CR (dibenzoxazepine), and Mace (CN mixed
              with a solvent) are not used by police anymore. CS and OC are
              certainly the most potent, which means, it takes less than the
              other types of agents to make someone miserable. These agents are
              all hydrophobic (don’t mix with water) with the exception of some
              OC products. We decontaminate tear gas using phase-transfer
              catalysis and alkali hydrolysis.
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
