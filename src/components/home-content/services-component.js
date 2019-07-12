import React from 'react';
import {Link} from 'react-router-dom';
function HomeServices () {
  return (
    <div className="service-container">
      <div className="services-banner">
        <h1>Our services</h1>
      </div>
      <div className="services-description">
        <p>
          Certified Decontamination provides inspecting and testing services for chemical and microbiological contaminants. In addition to testing for meth and mold, Certified Decontamination interprets meth and mold test results for property owners, home inspectors, attorneys and others. Mike Rowzee, the owner, teaches classes on how to sample for meth and mold. Classes are usually presented in the Spring and Fall.
        </p>
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
