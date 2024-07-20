import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./DesignTypes.css";
import typographyImg from "./images/typography.svg";
import animationImg from "./images/animation.svg";
import illustrationImg from "./images/illustration.svg";
import webImg from "./images/web.svg";

const DesignTypes = () => {
  const { t } = useTranslation();

  const designTypes = [
    {
      title: t("design_types.types.typography"),
      img: typographyImg,
      link: "/reference/typography",
    },
    {
      title: t("design_types.types.animation"),
      img: animationImg,
      link: "/reference/animation",
    },
    {
      title: t("design_types.types.illustration"),
      img: illustrationImg,
      link: "/reference/illustration",
    },
    {
      title: t("design_types.types.web"),
      img: webImg,
      link: "/reference/web",
    },
  ];

  return (
    <section
      className="design-types-section"
      aria-labelledby="design-types-title"
    >
      <h2 id="design-types-title" className="design-types-title">
        {t("design_types.title")}
      </h2>
      <div
        className="design-types-buttons"
        role="navigation"
        aria-label="Design Types"
      >
        {designTypes.map((design, index) => (
          <Link
            key={index}
            to={design.link}
            className="design-button"
            aria-label={design.title}
          >
            <img src={design.img} alt={design.title} />
            <div className="design-button-title">{design.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DesignTypes;
