import React from "react";
import { useTranslation } from "react-i18next";
import { toolGuidesData } from "./ToolGuideData";
import "./ToolGuides.css";

const GuideDetail = ({ guideId }) => {
  const { t } = useTranslation();

  const guide = toolGuidesData[guideId];

  if (!guide) {
    return <p>{t("guideContent.not_found")}</p>;
  }

  return (
    <div className="guide-detail" aria-labelledby="guide-title">
      <h1 id="guide-title">{t(`guideContent.${guideId}.title`)}</h1>
      <img
        className="guide-header-image"
        src={guide.image}
        alt={t(`guideContent.${guideId}.title`)}
      />
      <div className="guide-description">
        <p>{t(`guideContent.${guideId}.description`)}</p>
        {guide.sections.map((section, index) => (
          <div key={index} className="guide-section">
            <h2 id={`section-title-${index}`}>
              {t(`guideContent.${guideId}.sections.${index}.title`)}
            </h2>
            <div
              className="section-content"
              aria-labelledby={`section-title-${index}`}
            >
              <div className="section-text">
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>
                      <strong>
                        {t(
                          `guideContent.${guideId}.sections.${index}.content.${idx}.title`
                        )}
                        :
                      </strong>{" "}
                      {t(
                        `guideContent.${guideId}.sections.${index}.content.${idx}.description`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={section.image}
                alt={t(`guideContent.${guideId}.sections.${index}.title`)}
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
