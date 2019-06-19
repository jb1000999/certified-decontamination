import React from 'react';

export default function ContactContainer () {
  return (
    <div className="contact-header-container">
      <h1>Contact us</h1>
      <div className="phone-number">
        Call or email us if you have any questions <br />
        801-809-6932
        <div className="map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.3458943831708!2d-111.9741686684451!3d40.614623324296815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528ec22d0ba99d%3A0xa4fb7875ec7b80f7!2sCertified+Decontamination!5e0!3m2!1sen!2sus!4v1560969851688!5m2!1sen!2sus"
            width="500"
            height="400"
            frameBorder="0"
            style={{border: 0}}
          /> */}
        </div>
      </div>
    </div>
  );
}
