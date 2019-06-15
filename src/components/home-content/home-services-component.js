import React, {Component} from 'react';

export default class HomeServices extends Component {
  render () {
    return (
      <div className="service-container">
        <div className="services-banner">
          <h2>Our Services</h2>
        </div>
        <div className="grid-boxes">
          <div className="services-grid">
            <h3>Meth and Meth Lab Decontamination</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <a href="/meth" className="learn-more-button">Learn more</a>
          </div>

          <div className="services-grid">
            <h3>Mold Remediation</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <a href="/mold" className="learn-more-button">Learn more</a>
          </div>

          <div className="services-grid">
            <h3>Fentanyl Decontamination</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <a href="/fentanyl" className="learn-more-button">Learn more</a>
          </div>

          <div className="services-grid">
            <h3>Tear Gas Decontamination</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <a href="/tear-gas" className="learn-more-button">Learn more</a>
          </div>

          <div className="services-grid">
            <h3>Ricin Decontamination</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <a href="/ricin" className="learn-more-button">Learn more</a>
          </div>
        </div>
      </div>
    );
  }
}
