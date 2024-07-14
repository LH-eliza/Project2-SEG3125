import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Roadmap.css";
import { roadmapData } from "./RoadmapData";

const Roadmap = () => {
  const { roadmapId } = useParams();
  const { t } = useTranslation();
  const roadmap = roadmapData[roadmapId];

  if (!roadmap) {
    return <p>{t("roadmap.not_found")}</p>;
  }

  return (
    <div className="road">
      <div className={roadmapId.charAt(0).toUpperCase() + roadmapId.slice(1)}>
        <h1>{t(`roadmap.${roadmapId}.title`)}</h1>
        <img
          className="roadmap-image"
          src={roadmap.image}
          alt={t(`roadmap.${roadmapId}.title`)}
        />
        <div className="horizontal-line"></div>
        <div className="roadmap-description">
          <p>{t(`roadmap.${roadmapId}.description`)}</p>
          {roadmap.sections.map((section, index) => (
            <div key={index} className="roadmap-section">
              <h2>{t(`roadmap.${roadmapId}.sections.${index}.title`)}</h2>
              <div className="section-content">
                <div className="section-text">
                  <ul>
                    {section.content.map((item, idx) => (
                      <li key={idx}>
                        <strong>
                          {t(
                            `roadmap.${roadmapId}.sections.${index}.content.${idx}.title`
                          )}
                          :
                        </strong>{" "}
                        {t(
                          `roadmap.${roadmapId}.sections.${index}.content.${idx}.description`
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={section.image}
                  alt={t(`roadmap.${roadmapId}.sections.${index}.title`)}
                  className="section-image"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
};

export default Roadmap;
