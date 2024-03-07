import React, { useState } from "react";
import strings from "../Assets/localization";

const Contact = () => {
  const [email, setEmail] = useState(""); // Initialize email state

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state when input changes
  };

  const submitForm = (event) => {
    event.preventDefault();
    alert("We will contact you soon!");
    setEmail(""); // Clear email input after submission
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">{strings.contactQuestion}</h1>
      <h1 className="primary-heading">{strings.letUsHelp}</h1>
      <div className="contact-form-container">
        <form name="contact" onSubmit={submitForm} netlify>
          {/* Input field for email */}
          <input
            type="email"
            placeholder="yourmail@domain"
            value={email} // Bind input value to email state
            onChange={handleEmailChange} // Handle input changes
          />
          {/* Submit button */}
          <button className="secondary-button" type="submit">
            {strings.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;