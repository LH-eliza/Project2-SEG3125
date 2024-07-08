import React from "react";
import { useParams } from "react-router-dom";
import "./Roadmap.css";
import { roadmapData } from "./RoadmapData";

const Roadmap = () => {
  const { roadmapId } = useParams();
  const roadmap = roadmapData[roadmapId];

  if (!roadmap) {
    return <p>Roadmap not found.</p>;
  }

  return (
    <div className={roadmapId.charAt(0).toUpperCase() + roadmapId.slice(1)}>
      <h1>{roadmap.title}</h1>
      <img className="roadmap-image" src={roadmap.image} alt={roadmap.title} />
      <div className="horizontal-line"></div>
      <div className="roadmap-description">
        <p>{roadmap.description}</p>
        {roadmap.sections.map((section, index) => (
          <div key={index}>
            <div className="section">
              <div className="section-content">
                <ul>
                  <h2>{section.title}</h2>
                  {section.content.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
                <img
                  src={section.image}
                  alt={section.title}
                  className="side-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Roadmap;
