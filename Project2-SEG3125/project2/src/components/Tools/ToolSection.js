import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ToolSection.css";
import canvaIcon from "./icons/canva.svg";
import figmaIcon from "./icons/figma.svg";
import illustratorIcon from "./icons/illustrator.svg";
import photoshopIcon from "./icons/photoshop.svg";
import procreateIcon from "./icons/procreate.svg";
import splineIcon from "./icons/spline.svg";

const ToolSection = () => {
  const { t } = useTranslation();
  const [selectedTool, setSelectedTool] = useState(null);

  const toolIcons = {
    figma: figmaIcon,
    procreate: procreateIcon,
    illustrator: illustratorIcon,
    canva: canvaIcon,
    photoshop: photoshopIcon,
    spline: splineIcon,
  };

  return (
    <section
      id="tools-section"
      className="tools-section"
      aria-labelledby="tools-title"
    >
      <h2 id="tools-title" className="tools-title">
        {t("tool_section.title")}
      </h2>
      <div className="tools-buttons" role="group" aria-label="Tool selection">
        {Object.keys(toolIcons).map((tool) => (
          <button
            key={tool}
            className={`tool-button ${selectedTool === tool ? "selected" : ""}`}
            title={tool.charAt(0).toUpperCase() + tool.slice(1)}
            onClick={() => setSelectedTool(tool)}
            aria-pressed={selectedTool === tool}
          >
            <img
              src={toolIcons[tool]}
              alt={tool.charAt(0).toUpperCase() + tool.slice(1)}
            />
          </button>
        ))}
      </div>
      {selectedTool && (
        <div className="tool-cards-container">
          <div className="tool-cards-header">
            <h3 className="tool-cards-title">
              {t(`tool_section.tools.${selectedTool}.title`)}
            </h3>
          </div>
          <div className="inspo-cards-container">
            {t(`tool_section.tools.${selectedTool}.guides`, {
              returnObjects: true,
            }).map((card, index) => (
              <Link key={index} to={card.link} className="inspo-card">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ToolSection;
