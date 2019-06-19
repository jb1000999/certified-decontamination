import React from 'react';

import ContactForm from '../forms/contact-form';
import ContactContainer from '../containers/contact-container';

export default function Contact () {
  return (
    <div className="contact-container">
      <ContactContainer />

      <div className="contact form container">
        <ContactForm />

      </div>
    </div>
  );
}
