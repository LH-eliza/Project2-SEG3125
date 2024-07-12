import React from "react";
import { useTranslation } from "react-i18next";
import "./IconLibraries.css";

import IconImage from "./Icon/icon.svg";

const IconLibraries = () => {
  const { t } = useTranslation();

  return (
    <div className="icon-libraries-container">
      <div className="icon-libraries-text-container">
        <h2 className="icon-libraries-title">
          {t("icon_libraries.title")}
          <br />
          <span className="highlight">{t("icon_libraries.highlight")}</span>
        </h2>
        <p className="icon-libraries-description">
          {t("icon_libraries.description")}
        </p>
        <a href="/resources" className="icon-libraries-link">
          {t("icon_libraries.link")}
        </a>
      </div>
      <div className="icon-libraries-image-container">
        <img
          src={IconImage}
          alt={t("icon_libraries.highlight")}
          className="icon-libraries-image"
        />
      </div>
    </div>
  );
};

export default IconLibraries;
