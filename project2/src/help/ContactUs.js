import React, { useState } from "react";
import "./ContactUs.css";
import FAQ from "./Faq";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setError("All fields are required!");
      return;
    }
    setError("");
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="guide-header">
        <p>Get Help</p>
      </div>
      <div className="contact-header">
        <h2>Contact us</h2>
        <p>Have any questions, feel free to contact us!</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          className="contact-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your message here..."
          className="contact-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
      <FAQ />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Thank you for your message.</h3>
            <p> We will get back to you shortly!</p>
            <button onClick={closePopup} className="popup-close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
