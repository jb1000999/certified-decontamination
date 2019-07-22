import React from "react";

export default function ContactContainer() {
  return (
    <div className="call-us-container">
      <h1>Call us: </h1>
      <div className="phone-number">Call us at (801)809-6932</div>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.673038777485!2d-111.97504768428963!3d40.61503695147812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528ec22d0ba99d%3A0xa4fb7875ec7b80f7!2sCertified+Decontamination!5e0!3m2!1sen!2sus!4v1561588742627!5m2!1sen!2sus"
          width="600"
          height="450"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
