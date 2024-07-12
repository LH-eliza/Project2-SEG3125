import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContactUs.css";
import FAQ from "./Faq";

const ContactUs = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setError(t("contactUs.error"));
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
        <p>{t("contactUs.header")}</p>
      </div>
      <div className="contact-header">
        <h2>{t("contactUs.title")}</h2>
        <p>{t("contactUs.description")}</p>
      </div>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        aria-labelledby="contact-title"
      >
        <label htmlFor="contact-email" className="sr-only">
          {t("contactUs.emailPlaceholder")}
        </label>
        <input
          type="email"
          id="contact-email"
          placeholder={t("contactUs.emailPlaceholder")}
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="contact-name" className="sr-only">
          {t("contactUs.namePlaceholder")}
        </label>
        <input
          type="text"
          id="contact-name"
          placeholder={t("contactUs.namePlaceholder")}
          className="contact-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="contact-message" className="sr-only">
          {t("contactUs.messagePlaceholder")}
        </label>
        <textarea
          id="contact-message"
          placeholder={t("contactUs.messagePlaceholder")}
          className="contact-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="contact-button">
          {t("contactUs.sendButton")}
        </button>
      </form>
      <FAQ />
      {showPopup && (
        <div
          className="popup"
          role="dialog"
          aria-labelledby="popup-title"
          aria-describedby="popup-description"
        >
          <div className="popup-content">
            <h3 id="popup-title">{t("contactUs.thankYou")}</h3>
            <p id="popup-description">{t("contactUs.getBack")}</p>
            <button onClick={closePopup} className="popup-close-button">
              {t("contactUs.closeButton")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
