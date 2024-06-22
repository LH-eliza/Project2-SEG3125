import React from "react";
import "./DesignTypes.css";
import typographyImg from "./images/typography.svg";
import animationImg from "./images/animation.svg";
import illustrationImg from "./images/illustration.svg";
import webImg from "./images/web.svg";

const DesignTypes = () => {
  const designTypes = [
    { title: "Typography", img: typographyImg },
    { title: "Animation", img: animationImg },
    { title: "Illustration", img: illustrationImg },
    { title: "Web", img: webImg },
  ];

  return (
    <div className="design-types-section">
      <h2 className="design-types-title">
        Stumped? Get started with learning these design types.
      </h2>
      <div className="design-types-buttons">
        {designTypes.map((design, index) => (
          <div key={index} className="design-button">
            <img src={design.img} alt={design.title} />
            <div className="design-button-title">{design.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignTypes;
