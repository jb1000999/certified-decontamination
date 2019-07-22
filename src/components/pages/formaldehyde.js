import React, { Component } from "react";

import HomeServices from "../home-content/services-component";

export default class Formaldehyde extends Component {
  render() {
    return (
      <div className="info-page-container">
        <div className="info-banner">
          <h1>Formaldehyde</h1>
        </div>
        <div className="info-container">
          <div className="info">
            <p>
              Many building products and other items in the home produce
              formaldehyde. Even people produce formaldehyde. Small
              concentrations of formaldehyde cause us no harm. High
              concentrations of formaldehyde can irritate our eyes, throat and
              lungs. High concentrations of formaldehyde can be carcinogenic.
              Decontaminating dwellings with strong oxidizers may cause building
              materials to release high concentrations of formaldehyde. Strong
              oxidizers in form of liquid sprays, liquid fog and ozone should
              never be used indoors unless followed by testing for formaldehyde
              and decontamination when high levels of formaldehyde are found. We
              decontaminate for formaldehyde by saturating affected materials
              with a compound that inhibits the production of VOCs including
              formaldehyde.
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
