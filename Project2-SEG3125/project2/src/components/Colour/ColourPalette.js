import React from "react";
import { useTranslation } from "react-i18next";
import "./ColourPalettes.css";

import BluePalette from "./colour/blue.svg";
import PurplePalette from "./colour/purple.svg";
import TropicalPalette from "./colour/tropical.svg";

const ColourPalettes = () => {
  const { t } = useTranslation();

  return (
    <div className="colour-palettes-container">
      <div className="colour-palettes-image-container">
        <img
          src={BluePalette}
          alt="Blue Palette"
          className="colour-palette-image"
        />
        <img
          src={PurplePalette}
          alt="Purple Palette"
          className="colour-palette-image"
        />
        <img
          src={TropicalPalette}
          alt="Tropical Palette"
          className="colour-palette-image"
        />
      </div>
      <div className="colour-palettes-text-container">
        <h2 className="colour-palettes-title">
          {t("colour_palettes.title")}
          <br />
          <span className="highlight">{t("colour_palettes.highlight")}</span>
        </h2>
        <p className="colour-palettes-description">
          {t("colour_palettes.description")}
        </p>
        <a href="/resources" className="colour-palettes-link">
          {t("colour_palettes.link")}
        </a>
      </div>
    </div>
  );
};

export default ColourPalettes;
