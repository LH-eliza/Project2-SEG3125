import React from "react";
import "./IconLibraries.css";

import IconImage from "./Icon/icon.svg";

const IconLibraries = () => {
  return (
    <div className="icon-libraries-container">
      <div className="icon-libraries-text-container">
        <h2 className="icon-libraries-title">
          Discover Libraries <br />
          of <span className="highlight">UI UX Icons</span>
        </h2>
        <p className="icon-libraries-description">
          Have access to various icons to use within your projects!
        </p>
        <a href="/resources" className="icon-libraries-link">
          View All Icons →
        </a>
      </div>
      <div className="icon-libraries-image-container">
        <img
          src={IconImage}
          alt="UI UX Icons"
          className="icon-libraries-image"
        />
      </div>
    </div>
  );
};

export default IconLibraries;
