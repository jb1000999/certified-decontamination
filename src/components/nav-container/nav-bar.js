import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavComponent extends Component {
  render () {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <NavLink to="/" className="logo">
            Certified Decontamination
          </NavLink>
        </div>
        <div className="navlinks-container">
          <div className="navlink-container">
            <NavLink exact to="/" activeClassName="active-nav-buttons">
              Home
            </NavLink>
          </div>
          <div className="navlink-container">
            <NavLink to="/about" activeClassName="active-nav-buttons">
              About Us
            </NavLink>
          </div>
          <div className="navlink-container">
            <NavLink to="/contact" activeClassName="active-nav-buttons">
              Contact
            </NavLink>
          </div>
          <div className="navlink-container">
            <NavLink to="/faq" activeClassName="active-nav-buttons">
              FAQ
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
