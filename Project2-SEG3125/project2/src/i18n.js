import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en/global.json";
import ko from "./translations/ko/global.json";

const language = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
