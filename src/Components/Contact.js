import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("yourmail@domain");

  const submitForm = (event) => {
    event.preventDefault();
    alert("We will contact you soon!");
    setEmail("");
  }
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder={email} />
        <button className="secondary-button" onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
