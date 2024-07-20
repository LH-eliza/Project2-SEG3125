import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Community from "./community/Community";
import Reference from "./references/Reference";
import Resources from "./resources/Resources";
import Guides from "./guides/Guide";
import Inspiration from "./inspiration/Inspiration";
import ContactUs from "./help/ContactUs";

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || i18n.language
  );

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang && storedLang !== language) {
      changeLanguage(storedLang);
    }
  }, [language, i18n]);

  return (
    <div className="App">
      <Navbar language={language} changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/reference/*" element={<Reference />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/guides/*" element={<Guides />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<h1>Page is still in development</h1>} />
      </Routes>
      <Footer language={language} changeLanguage={changeLanguage} />
    </div>
  );
}

export default App;
