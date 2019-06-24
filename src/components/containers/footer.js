import React from 'react';

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
        </div>
      </div>
      <div className="footer-right">
        <div className="contact-info">
          Contact us at: <br /> 801-809-6932
        </div>
      </div>

    </div>
  );
}
