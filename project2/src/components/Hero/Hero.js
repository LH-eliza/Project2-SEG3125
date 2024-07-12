import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  const handleScroll = () => {
    const element = document.getElementById("tools-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero" role="banner" aria-labelledby="hero-title">
      <div className="hero-badge" aria-label={t("hero.badge")}>
        {t("hero.badge")}
      </div>
      <h1 className="hero-title" id="hero-title">
        {t("hero.title.resources")}{" "}
        <span className="for">{t("hero.title.for")}</span>{" "}
        <span className="highlight">{t("hero.title.highlight_designers")}</span>
        ,<br />
        <span className="for">{t("hero.title.by")}</span>{" "}
        <span className="highlight-gradient">
          {t("hero.title.highlight_gradient")}
        </span>
        .
      </h1>
      <p className="hero-subtitle">
        <span className="subtitle">{t("hero.subtitle")}</span>
      </p>
      <button
        className="hero-button"
        onClick={handleScroll}
        aria-label={t("hero.button")}
      >
        {t("hero.button")}
      </button>
    </div>
  );
};

export default Hero;
