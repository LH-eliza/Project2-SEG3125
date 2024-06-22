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
            <a href="#">References</a>
          </li>
          <li className="footer-item">
            <a href="#">Guides</a>
          </li>
          <li className="footer-item">
            <a href="#">Inspiration</a>
          </li>
          <li className="footer-item">
            <a href="#">Resources</a>
          </li>
          <li className="footer-item">
            <a href="#">About</a>
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
            <a href="#">Tags</a>
            <a href="#">Design-Types</a>
            <a href="#">Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
