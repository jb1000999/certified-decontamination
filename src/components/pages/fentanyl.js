import React, { Component } from "react";

import HomeServices from "../home-content/services-component";

export default class Fentanyl extends Component {
  render() {
    return (
      <div className="info-page-container">
        <div className="info-banner">
          <h1>Fentanyl</h1>
        </div>
        <div className="info-container">
          <div className="info">
            <p>
              Fentanyl and fentanyl analogs (“fentanyl species”) can be
              extremely dangerous. Unlike methamphetamine, fentanyl species are
              a hazardous material under the typical definition. Our general
              plan for fentanyl species is to decontaminate all items that will
              be discarded prior removing them from the dwelling. Many
              decontamination companies use the dry cleaning method in the HVAC
              system. The dry cleaning method does not clean and does not
              decontaminate. Some companies use decontamination products
              containing hydrogen peroxide. Depending on other components of the
              peroxide solution, they may not be effective. We use phase
              transfer catalysis and chlorinating oxidation to decontaminate
              fentanyl species. Our primary component is hypochlorous acid.
              Hypochlorous acid is what our white blood cells create to kill
              viruses, cancer cells, etc.
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
