import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = ({ language, changeLanguage }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (language) {
      changeLanguage(language);
    }
  }, [language, changeLanguage]);

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="footer-logo-part1">Innov</span>
          <span className="footer-logo-part2">Art</span>
        </div>
        <ul className="footer-menu" role="menu" aria-label="Footer Menu">
          <li className="footer-item" role="none">
            <a href="/reference" role="menuitem">
              {t("footer.references")}
            </a>
          </li>
          <li className="footer-item" role="none">
            <a href="/guides" role="menuitem">
              {t("footer.guides")}
            </a>
          </li>
          <li className="footer-item" role="none">
            <a href="/inspiration" role="menuitem">
              {t("footer.inspiration")}
            </a>
          </li>
          <li className="footer-item" role="none">
            <a href="/resources" role="menuitem">
              {t("footer.resources")}
            </a>
          </li>
          <li className="footer-item" role="none">
            <a href="/community" role="menuitem">
              {t("footer.uploadArt")}
            </a>
          </li>
        </ul>
        <div className="footer-language" aria-label="Language Selection">
          <span>{t("footer.language")} - </span>
          <button
            className={`footer-language-button ${
              language === "en" ? "active" : ""
            }`}
            onClick={() => changeLanguage("en")}
            aria-pressed={language === "en"}
          >
            {t("footer.english")}
          </button>
          <button
            className={`footer-language-button ${
              language === "ko" ? "active" : ""
            }`}
            onClick={() => changeLanguage("ko")}
            aria-pressed={language === "ko"}
          >
            {t("footer.korean")}
          </button>
        </div>
        <div className="footer-social" aria-label="Social Media Links">
          <a href="#" className="footer-social-link" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="footer-social-link" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" className="footer-social-link" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" className="footer-social-link" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-bottom">
          <span className="copyright">{t("footer.copyright")}</span>
          <div className="footer-tags" aria-label="Footer Tags">
            <a href="/inspiration">{t("footer.tags")}</a>
            <a href="/reference">{t("footer.designTypes")}</a>
            <a href="/contact-us">{t("footer.getHelp")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
