// Resources.js
import React from "react";
import "./Resources.css";

function Resources() {
  return (
    <div className="resources-container">
      <div className="resources-header">
        <p>Resources</p>
      </div>
      <div className="resources-content">
        <div className="colour-palettes">
          <h2>Colour Palettes</h2>
          <div className="palettes">
            <div
              className="palette"
              style={{ backgroundColor: "#4A90E2" }}
            ></div>
            <div
              className="palette"
              style={{ backgroundColor: "#7ED321" }}
            ></div>
            <div
              className="palette"
              style={{ backgroundColor: "#9013FE" }}
            ></div>
            <div
              className="palette"
              style={{ backgroundColor: "#F5A623" }}
            ></div>
            <div
              className="palette"
              style={{ backgroundColor: "#B8E986" }}
            ></div>
            <div
              className="palette"
              style={{ backgroundColor: "#50E3C2" }}
            ></div>
            <div
              className="palette"
              style={{ backgroundColor: "#F8E71C" }}
            ></div>
            <div
              className="palette"
              style={{ backgroundColor: "#D0021B" }}
            ></div>
          </div>
        </div>
        <div className="how-to-get">
          <h2>How to get the components?</h2>
          <p>1. Click on the Icons/Palette</p>
          <p>2. Colours and icons will be copied to your clipboard</p>
        </div>
      </div>
      <div className="icons-section">
        <h2>Icons</h2>
        <div className="icons">
          {/* Example icons, you should replace these with actual icons */}
          <span className="icon">🔄</span>
          <span className="icon">🔍</span>
          <span className="icon">⭐</span>
          <span className="icon">⚙️</span>
          <span className="icon">📁</span>
          <span className="icon">🗑️</span>
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
}

export default Resources;
