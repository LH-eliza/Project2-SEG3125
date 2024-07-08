import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="footer-logo-part1">Innov</span>
          <span className="footer-logo-part2">Art</span>
        </div>
        <ul className="footer-menu">
          <li className="footer-item">
            <a href="/reference">References</a>
          </li>
          <li className="footer-item">
            <a href="/guides">Guides</a>
          </li>
          <li className="footer-item">
            <a href="/inspiration">Inspiration</a>
          </li>
          <li className="footer-item">
            <a href="/resources">Resources</a>
          </li>
          <li className="footer-item">
            <a href="/community">Upload Art</a>
          </li>
        </ul>
        <div className="footer-social">
          <a href="#" className="footer-social-link">
            <FaLinkedinIn />
          </a>
          <a href="#" className="footer-social-link">
            <FaYoutube />
          </a>
          <a href="#" className="footer-social-link">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2024 InnovArt</span>
          <div className="footer-tags">
            <a href="/inspiration">Tags</a>
            <a href="/reference">Design-Types</a>
            <a href="/contact-us">Get Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
