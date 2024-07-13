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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameMaxLength = 50;
  const messageMaxLength = 1000;

  const handleBlur = (field) => {
    if (!email && field === "email") {
      setError(t("contactUs.error"));
    } else if (!emailRegex.test(email) && field === "email") {
      setError(t("contactUs.invalidEmail"));
    } else if (!name && field === "name") {
      setError(t("contactUs.error"));
    } else if (name.length > nameMaxLength && field === "name") {
      setError(t("contactUs.nameTooLong", { length: nameMaxLength }));
    } else if (!message && field === "message") {
      setError(t("contactUs.error"));
    } else if (message.length > messageMaxLength && field === "message") {
      setError(t("contactUs.messageTooLong", { length: messageMaxLength }));
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setError(t("contactUs.error"));
      return;
    }
    if (!emailRegex.test(email)) {
      setError(t("contactUs.invalidEmail"));
      return;
    }
    if (name.length > nameMaxLength) {
      setError(t("contactUs.nameTooLong", { length: nameMaxLength }));
      return;
    }
    if (message.length > messageMaxLength) {
      setError(t("contactUs.messageTooLong", { length: messageMaxLength }));
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
      <header className="guide-header">
        <p>{t("contactUs.header")}</p>
      </header>
      <section className="contact-header">
        <h2>{t("contactUs.title")}</h2>
        <p>{t("contactUs.description")}</p>
      </section>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        aria-labelledby="contact-title"
      >
        <label htmlFor="contact-email">
          {t("contactUs.emailPlaceholder")}
          <div className="tooltip">
            <span className="tooltip-icon">?</span>
            <span className="tooltip-text"> {t("contactUs.emailTips")}</span>
          </div>
        </label>
        <input
          type="email"
          id="contact-email"
          placeholder={t("contactUs.emailPlaceholder")}
          className={`contact-input ${
            !email || (email && !emailRegex.test(email)) ? "error" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur("email")}
          aria-required="true"
        />
        <label htmlFor="contact-name">
          {t("contactUs.namePlaceholder")}
          <div className="tooltip">
            <span className="tooltip-icon">?</span>
            <span className="tooltip-text"> {t("contactUs.nameTips")}</span>
          </div>
        </label>
        <input
          type="text"
          id="contact-name"
          placeholder={t("contactUs.namePlaceholder")}
          className={`contact-input ${
            !name || (name && name.length > nameMaxLength) ? "error" : ""
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur("name")}
          aria-required="true"
          maxLength={nameMaxLength}
        />
        <label htmlFor="contact-message">
          {t("contactUs.messagePlaceholder")}
          <div className="tooltip">
            <span className="tooltip-icon">?</span>
            <span className="tooltip-text">{t("contactUs.messageTips")}</span>
          </div>
        </label>
        <textarea
          id="contact-message"
          placeholder={t("contactUs.messagePlaceholder")}
          className={`contact-textarea ${
            !message || (message && message.length > messageMaxLength)
              ? "error"
              : ""
          }`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-required="true"
          maxLength={messageMaxLength}
        ></textarea>
        <div aria-live="assertive" className="error-container">
          {error && <p className="error-message">{error}</p>}
        </div>
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
