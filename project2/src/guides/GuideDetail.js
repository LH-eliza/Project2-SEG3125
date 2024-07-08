import React from "react";
import { toolGuidesData } from "./ToolGuideData";
import "./ToolGuides.css";

const GuideDetail = ({ guideId }) => {
  const guide = toolGuidesData[guideId];

  if (!guide) {
    return <p>Guide not found.</p>;
  }

  return (
    <div className="your-guide-detail">
      <h1>{guide.title}</h1>
      <img className="guide-header-image" src={guide.image} alt={guide.title} />
      <div className="guide-description">
        <p>{guide.description}</p>
        {guide.sections.map((section, index) => (
          <div key={index} className="guide-section">
            <h2>{section.title}</h2>
            <div className="section-content">
              <div className="section-text">
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={section.image}
                alt={section.title}
                className="section-image"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default GuideDetail;
