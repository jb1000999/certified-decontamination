import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../../static/assets/pictures/logo/cd-logo.png';

export default function NavComponent () {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <NavLink exact to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav className="navlinks-container">
        <nav className="navlink-container">
          <NavLink to="/about" activeClassName="active-nav-buttons">
            About Us
          </NavLink>
        </nav>
        <nav className="navlink-container">
          <NavLink to="/contact" activeClassName="active-nav-buttons">
            Contact
          </NavLink>
        </nav>
        <nav className="navlink-container">
          <NavLink to="/faq" activeClassName="active-nav-buttons">
            FAQ
          </NavLink>
        </nav>
      </nav>
    </div>
  );
}
