import React from "react";
import { Link } from "react-router-dom";
import "./DesignTypes.css";
import typographyImg from "./images/typography.svg";
import animationImg from "./images/animation.svg";
import illustrationImg from "./images/illustration.svg";
import webImg from "./images/web.svg";

const DesignTypes = () => {
  const designTypes = [
    { title: "Typography", img: typographyImg, link: "/reference/typography" },
    { title: "Animation", img: animationImg, link: "/reference/animation" },
    {
      title: "Illustration",
      img: illustrationImg,
      link: "/reference/illustration",
    },
    { title: "Web", img: webImg, link: "/reference/web" },
  ];

  return (
    <div className="design-types-section">
      <h2 className="design-types-title">
        Stumped? Get started with learning these design types.
      </h2>
      <div className="design-types-buttons">
        {designTypes.map((design, index) => (
          <Link key={index} to={design.link} className="design-button">
            <img src={design.img} alt={design.title} />
            <div className="design-button-title">{design.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesignTypes;
