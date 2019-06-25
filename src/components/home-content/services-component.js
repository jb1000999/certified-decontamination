import React from 'react';
import {Link} from 'react-router-dom';
function HomeServices () {
  return (
    <div className="service-container">
      <div className="services-banner">
        <h1>Our services</h1>

      </div>
      <div className="grid-boxes">
        <div className="services-grid">
          <h3>Meth and Meth Lab Decontamination</h3>
          <p>
            Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
          </p>
          <div className="learn-more-link">
            <Link to="/meth" className="link-buttons">
              Learn more
            </Link>
          </div>
        </div>

        <div className="services-grid">
          <h3>Mold Remediation</h3>
          <p>
            Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
          </p>
          <div className="learn-more-link">
            <Link to="/mold" className="link-buttons">
              Learn more
            </Link>
          </div>
        </div>

        <div className="services-grid">
          <h3>Fentanyl Decontamination</h3>
          <p>
            Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
          </p>
          <div className="learn-more-link">
            <Link to="/fentanyl" className="link-buttons">
              Learn more
            </Link>
          </div>
        </div>

        <div className="services-grid">
          <h3>Tear Gas Decontamination</h3>
          <p>
            Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
          </p>
          <div className="learn-more-link">
            <Link to="/tear-gas" className="link-buttons">
              Learn more
            </Link>
          </div>
        </div>

        <div className="services-grid">
          <h3>Ricin Decontamination</h3>
          <p>
            Nisi excepteur cupidatat exercitation culpa eiusmod velit est deserunt aliqua elit pariatur.
          </p>
          <div className="learn-more-link">
            <Link to="/ricin" className="link-buttons">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="learn-more-tabs" />
    </div>
  );
}

export default HomeServices;
