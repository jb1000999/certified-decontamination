import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component {
  state = {
    name: '',
    message: '',
    phone: '',
    email: '',
    sent: false,
    buttonText: 'Send Message',
  };

  formSubmit = e => {
    e.preventDefault ();

    this.setState ({
      buttonText: '...sending',
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };

    axios
      .post ('API_URI', data)
      .then (res => {
        this.setState ({sent: true}, this.resetForm ());
      })
      .catch (() => {
        console.log ('not sent');
      });
  };

  resetForm = () => {
    this.setState ({
      name: '',
      message: '',
      phone: '',
      email: '',
      buttonText: 'Message Sent',
    });
  };

  render () {
    return (
      <div className="form-content">
        <form className="contact-form" onSubmit={e => this.formSubmit (e)}>
          <div className="form-item">

            <label className="message" htmlFor="message-input">
              Your Message
            </label>
            <textarea
              onChange={e => this.setState ({message: e.target.value})}
              name="message"
              className="message-input"
              type="text"
              placeholder="Please write your message here"
              value={this.state.message}
              required
            />
          </div>

          <label className="message-name" htmlFor="message-name">
            Your Name
          </label>
          <input
            onChange={e => this.setState ({name: e.target.value})}
            name="name"
            className="message-name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
          />

          <label className="message-phone" htmlFor="message-phone">
            Your Phone
          </label>
          <input
            onChange={e => this.setState ({phone: e.target.value})}
            name="phone"
            className="message-phone"
            type="tel"
            placeholder="1234567890"
            required
            value={this.state.phone}
          />

          <label className="message-email" htmlFor="message-email">
            Your Email
          </label>
          <input
            onChange={e => this.setState ({email: e.target.value})}
            name="email"
            className="message-email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <div className="button--container">
            <button type="submit" className="button button-primary">
              {this.state.buttonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default ContactForm;
