import React from "react";
import "./Navbar.css";
import SliderButton from "../Slider/SliderButton";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="/" className="navbar-logo-link">
            <span className="navbar-logo-part1">Innov</span>
            <span className="navbar-logo-part2">Art</span>
          </a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a className="main-item" href="/community">
              {t("navbar.upload_art")}
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/reference">
              {t("navbar.references")}
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/guides">
              {t("navbar.guides")}
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/inspiration">
              {t("navbar.inspiration")}
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/resources">
              {t("navbar.resources")}
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/contact-us">
              {t("navbar.get_help")}
            </a>
          </li>
        </ul>
        <div className="navbar-slider">
          <SliderButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
