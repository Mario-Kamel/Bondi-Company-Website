import React, { useState } from "react";
import strings from "../Assets/localization";

const Contact = () => {
  const [email, setEmail] = useState("yourmail@domain");

  const submitForm = (event) => {
    event.preventDefault();
    alert("We will contact you soon!");
    setEmail("");
  }
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">{strings.contactQuestion}</h1>
      <h1 className="primary-heading">{strings.letUsHelp}</h1>
      <div className="contact-form-container">
        <input type="text" placeholder={email} />
        <button className="secondary-button" onClick={submitForm}>{strings.submit}</button>
      </div>
    </div>
  );
};

export default Contact;
