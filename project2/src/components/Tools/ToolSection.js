import React, { useState } from "react";
import "./ToolSection.css";
import canvaIcon from "./icons/canva.svg";
import figmaIcon from "./icons/figma.svg";
import illustratorIcon from "./icons/illustrator.svg";
import photoshopIcon from "./icons/photoshop.svg";
import procreateIcon from "./icons/procreate.svg";
import splineIcon from "./icons/spline.svg";

const ToolSection = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const toolData = {
    figma: [
      {
        title: "Getting Started with Figma",
        description: "Learning about the basics of your workspace.",
      },
      {
        title: "Wireframing in Figma",
        description: "What goes into them, how can they help you communicate.",
      },
      {
        title: "Figma Shortcuts",
        description:
          "A quick cheat sheet to speed up your process and to learn about each tool.",
      },
      {
        title: "Gradient Cheat Sheet",
        description:
          "Want a nice pop of color in your designs? Here's a little tool for you.",
      },
    ],
    procreate: [
      {
        title: "Getting Started with Procreate",
        description: "Learning about the basics of your workspace.",
      },
      {
        title: "Brushes in Procreate",
        description: "How to use them, how to make them.",
      },
      {
        title: "Layers in Procreate",
        description: "How to use them, how to make them.",
      },
      {
        title: "Color Theory in Procreate",
        description: "How to use them, how to make them.",
      },
    ],
    illustrator: [
      {
        title: "Getting Started with Illustrator",
        description: "Learning about the basics of your workspace.",
      },
      {
        title: "Pen Tool in Illustrator",
        description: "How to use them, how to make them.",
      },
      {
        title: "Shapes in Illustrator",
        description: "How to use them, how to make them.",
      },
      {
        title: "Pathfinder in Illustrator",
        description: "How to use them, how to make them.",
      },
    ],
    canva: [
      {
        title: "Getting Started with Canva",
        description: "Learning about the basics of your workspace.",
      },
      {
        title: "Templates in Canva",
        description: "How to use them, how to make them.",
      },
      {
        title: "Text in Canva",
        description: "How to use them, how to make them.",
      },
      {
        title: "Images in Canva",
        description: "How to use them, how to make them.",
      },
    ],
    photoshop: [
      {
        title: "Getting Started with Photoshop",
        description: "Learning about the basics of your workspace.",
      },
      {
        title: "Layers in Photoshop",
        description: "How to use them, how to make them.",
      },
      {
        title: "Masks in Photoshop",
        description: "How to use them, how to make them.",
      },
      {
        title: "Filters in Photoshop",
        description: "How to use them, how to make them.",
      },
    ],
    spline: [
      {
        title: "Getting Started with Spline",
        description: "Learning about the basics of your workspace.",
      },
      {
        title: "3D Objects in Spline",
        description: "How to use them, how to make them.",
      },
      {
        title: "Materials in Spline",
        description: "How to use them, how to make them.",
      },
      {
        title: "Lighting in Spline",
        description: "How to use them, how to make them.",
      },
    ],
  };

  return (
    <div className="tools-section">
      <h2 className="tools-title">
        Explore Various Industry Standard Tools And Get Started
      </h2>
      <div className="tools-buttons">
        {Object.keys(toolData).map((tool) => (
          <button
            key={tool}
            className={`tool-button ${selectedTool === tool ? "selected" : ""}`}
            title={tool.charAt(0).toUpperCase() + tool.slice(1)}
            onClick={() => setSelectedTool(tool)}
          >
            <img
              src={
                tool === "figma"
                  ? figmaIcon
                  : tool === "procreate"
                  ? procreateIcon
                  : tool === "illustrator"
                  ? illustratorIcon
                  : tool === "canva"
                  ? canvaIcon
                  : tool === "photoshop"
                  ? photoshopIcon
                  : splineIcon
              }
              alt={tool.charAt(0).toUpperCase() + tool.slice(1)}
            />
          </button>
        ))}
      </div>
      {selectedTool && toolData[selectedTool] && (
        <div className="tool-cards-container">
          <div className="tool-cards-header">
            <h3 className="tool-cards-title">
              {selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1)}{" "}
              Basics
            </h3>
          </div>
          <div className="cards-container">
            {toolData[selectedTool].map((card, index) => (
              <div key={index} className="card">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolSection;
