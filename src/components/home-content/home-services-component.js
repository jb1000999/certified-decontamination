import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class HomeServices extends Component {
  constructor (props) {
    super (props);
  }

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
            <Link to="/meth" className="learn-more-button">
              Learn more
            </Link>
          </div>

          <div className="services-grid">
            <h3>Mold Remediation</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <Link to="/mold" className="learn-more-button">
              Learn more
            </Link>
          </div>

          <div className="services-grid">
            <h3>Fentanyl Decontamination</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <Link to="/fentanyl" className="learn-more-button">
              Learn more
            </Link>
          </div>

          <div className="services-grid">
            <h3>Tear Gas Decontamination</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <Link to="/tear-gas" className="learn-more-button">
              Learn more
            </Link>
          </div>

          <div className="services-grid">
            <h3>Ricin Decontamination</h3>
            <p>
              Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
            </p>
            <Link to="/ricin" className="learn-more-button">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
