import React from "react";
import "./ContactUs.css";
import FAQ from "./Faq";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="guide-header">
        <p>Get Help</p>
      </div>
      <div className="contact-header">
        <h2>Contact us</h2>
        <p>Have any questions, feel free to contact us!</p>
      </div>
      <form className="contact-form">
        <input type="email" placeholder="Email" className="contact-input" />
        <input type="text" placeholder="Name" className="contact-input" />
        <textarea
          placeholder="Write your message here..."
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
      <FAQ />
    </div>
  );
};

export default ContactUs;
