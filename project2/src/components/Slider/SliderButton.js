import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./SliderButton.css";

const SliderButton = ({ language, changeLanguage }) => {
  const [isEnglish, setIsEnglish] = useState(() => {
    return language === "en" || !language;
  });

  const toggleLanguage = () => {
    const newLang = isEnglish ? "ko" : "en";
    changeLanguage(newLang);
    setIsEnglish(newLang === "en");
  };

  useEffect(() => {
    setIsEnglish(language === "en");
  }, [language]);

  return (
    <div className="slider-container" onClick={toggleLanguage}>
      <div className={`slider ${isEnglish ? "eng" : "kor"}`}>
        <div className="slider-text">{isEnglish ? "ENG" : "한국어"}</div>
      </div>
      <div className="language-texts">
        <div className={`language-text ${isEnglish ? "active" : ""}`}>ENG</div>
        <div className={`language-text ${!isEnglish ? "active" : ""}`}>
          한국어
        </div>
      </div>
    </div>
  );
};

export default SliderButton;
