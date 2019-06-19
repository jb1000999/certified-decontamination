import React, {useState} from 'react';
import axios from 'axios';

function ContactForm (props) {
  const [name, setName] = useState ('');
  const [phone, setPhone] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ('');
  const [sent, setSent] = useState (false);

  const resetForm = () => {
    setName ('');
    setPhone ('');
    setEmail ('');
    setMessage ('');
  };

  const formSubmit = e => {
    e.preventDefault ();

    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    axios
      .post ('API_URI', data)
      .then (res => {
        setSent (true, resetForm ());
      })
      .catch (() => {
        console.log ('not sent', Error);
      });
  };

  return (
    <div className="form-container">
      fields with '*' are required
      <form>
        <div className="form item">
          <label>Your name: </label>
          <input
            type="text"
            placeholder="Full Name"
            onChange={e => setName (e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <label>Phone: </label>
          <input
            type="text"
            placeholder="(123)456-7890"
            onChange={e => setPhone (e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <label>Email: </label>
          <input
            type="email"
            placeholder="someone@example.com"
            onChange={e => setEmail (e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <label>Messege</label>
          <textarea
            type="text"
            placeholder="What's going on?"
            onChange={e => setMessage (e.target.value)}
            required
          />
        </div>
        <input onClick={formSubmit} type="submit" value="Submit" />

      </form>
    </div>
  );
}

export default ContactForm;
