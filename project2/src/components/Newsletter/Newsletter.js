import React, { useState } from "react";
import "./NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-bg"></div>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
      <div className="circle circle5"></div>
      <div className="newsletter-content">
        <h2>Want to get the latest updates?</h2>
        <p>Sign up to our newsletter today.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
