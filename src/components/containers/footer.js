import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../../static/assets/pictures/logo/cd-logo.png';

export default function Footer () {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} className="footer-logo" />
        </div>
      </div>
      <div className="footer-center">
        <div className="copywright-contianer">

          © {new Date ().getFullYear ()} Certified Decontamination
          <br />
          All rights Reserved
          <br />
          Reproduction in any manner,
          <br />
          in whole or in part,
          <br />
          without permission, is prohibited.
        </div>
      </div>
      <div className="footer-right">
        <div className="contact-info">
          Contact us at: <br /> 801-809-6932, <br />
          or email us here <br /> on our <Link to="/contact">Contact Page</Link>
        </div>
      </div>

    </div>
  );
}
