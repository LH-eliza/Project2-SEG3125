import React from "react";
import "./ColourPalettes.css";

import BluePalette from "./colour/blue.svg";
import PurplePalette from "./colour/purple.svg";
import TropicalPalette from "./colour/tropical.svg";

const ColourPalettes = () => {
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
          Have access to <br />
          <span className="highlight">Colour Palettes</span>
        </h2>
        <p className="colour-palettes-description">
          Can’t decide on a colour palette? Generate one or select one to suit
          your needs!
        </p>
        <a href="/resources" className="colour-palettes-link">
          View All Colour Palettes →
        </a>
      </div>
    </div>
  );
};

export default ColourPalettes;
