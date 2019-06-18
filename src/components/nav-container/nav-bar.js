import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function NavComponent () {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <NavLink to="/" className="logo">
          Certified Decontamination
        </NavLink>
      </div>
      <nav className="navlinks-container">
        <nav className="navlink-container">
          <NavLink exact to="/" activeClassName="active-nav-buttons">
            Home
          </NavLink>
        </nav>
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
