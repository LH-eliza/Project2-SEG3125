import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./SliderButton.css";

const SliderButton = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(() => {
    return (
      localStorage.getItem("language") === "en" ||
      !localStorage.getItem("language")
    );
  });

  const toggleLanguage = () => {
    const newLang = isEnglish ? "ko" : "en";
    i18n
      .changeLanguage(newLang)
      .then(() => {
        localStorage.setItem("language", newLang);
        setIsEnglish(newLang === "en");
      })
      .catch((err) => console.error("Language change error:", err));
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      i18n
        .changeLanguage(storedLang)
        .then(() => {
          setIsEnglish(storedLang === "en");
        })
        .catch((err) => console.error("Language change error:", err));
    }
  }, [i18n]);

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
