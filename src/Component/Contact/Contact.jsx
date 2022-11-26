import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./contact.css";
import { DarkStar } from '../Star/Star'

export default function Contact() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('');
    } else {
      setIsValid(false);
      setMessage('...Enter a valid email!');
    }
  };

  const [nameValid, setNameValid] = useState(false);
  const [messageName, setMessageName] = useState('');
  const nameRegex=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;

  const validateName= (e) => {
    const name = e.target.value;
    if (nameRegex.test(name)) {
      setNameValid(true);
      setMessageName('');
    } else {
      setNameValid(false);
      setMessageName('...Enter your name!');
    }
  }
  const [phoneValid, setPhoneValid] = useState(false);
  const [messagePhone, setMessagePhone] = useState('');
  const phoneRegex=/^01[0125][0-9]{8}$/;

  const validatePhone= (e) => {
    const phone = e.target.value;
    if (phoneRegex.test(phone)) {
      setPhoneValid(true);
      setMessagePhone('');
    } else {
      setPhoneValid(false);
      setMessagePhone('...Enter your phone number!');
    }
  }



  return <>
          <div className="container-fluid contact">
            <div className="contact-headding">
                <h2>Contact me</h2>
                <DarkStar/>
            </div>
            <form action="">
            <div className="container contact-container">
                <div className="contact-form">
                <input className='contact-input name' type="text" placeholder='Name' required onChange={validateName}/>
                <div className={`message ${nameValid ? 'success' : 'error'}`}>
                                    {messageName}
                </div>
                <input className='contact-input  email-input' type="email" placeholder='Eamil Address' required onChange={validateEmail}/>
                <div className={`message ${isValid ? 'success' : 'error'}`}>
                                    {message}
                </div>
                <input className='contact-input' type="phone" placeholder='Phone Number' required onChange={validatePhone}/>
                <div className={`message ${phoneValid ? 'success' : 'error'}`}>
                                    {messagePhone}
                </div>
                <textarea className='contact-input' cols="30" rows="7" placeholder='Message'></textarea>
                <button   className='btn contact-btn'>Send</button>

                
                </div>
            </div>
            </form>
        </div>
  </>
}
