import React, { Component } from "react";

import HomeServices from "../home-content/services-component";

export default class Ricin extends Component {
  render() {
    return (
      <div className="info-page-container">
        <div className="info-banner">
          <h1>Ricin</h1>
        </div>
        <div className="info-container">
          <div className="info">
            <p>
              We have decontaminated dwellings for ricin twice. In both cases, I
              believe the persons who made the ricin were influenced to do so by
              the Breaking Bad TV show. One person made it to commit suicide and
              the other to kill his ex-girlfriend’s new boyfriend. Surprisingly
              and fortunately, both of them failed. Ricin consists of two
              protein chains referred to as “A chain” and “B chain.” Both
              protein chains must be present to be toxic. Decontamination of
              ricin is similar to decontamination of fentanyl; all items to be
              discarded are decontaminated indoors before removal from the
              dwelling. We decontaminate ricin using phase-transfer catalysis
              and reduction-oxidation.
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
