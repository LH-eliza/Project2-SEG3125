import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Reference.css";
import TypographyImg from "./Images/Typography.png";
import IllustrationImg from "./Images/Illustration.png";
import Design3DImg from "./Images/3D.png";
import WebImg from "./Images/Web.png";
import AnimationImg from "./Images/Animation.png";
import Roadmap from "./Roadmap";

function Reference() {
  const { t } = useTranslation();

  return (
    <div className="top">
      <div className="Roadmap-header">
        <p>{t("references.header")}</p>
      </div>
      <div className="app">
        <div className="sidebar">
          <h2>{t("references.sidebar.title")}</h2>
          <nav>
            <ul>
              <li>
                <Link to="typography">
                  {t("references.sidebar.typography")}
                </Link>
              </li>
              <li>
                <Link to="illustration">
                  {t("references.sidebar.illustration")}
                </Link>
              </li>
              <li>
                <Link to="design">{t("references.sidebar.design")}</Link>
              </li>
              <li>
                <Link to="animation">{t("references.sidebar.animation")}</Link>
              </li>
              <li>
                <Link to="web">{t("references.sidebar.web")}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":roadmapId" element={<RoadmapWrapper />} />
            <Route
              path="*"
              element={<h1>{t("references.underDevelopment")}</h1>}
            />
          </Routes>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>{t("home.title")}</h1>
      <p>{t("home.description")}</p>
      <div className="roadmap-cards">
        <Link to="typography" className="card">
          <img src={TypographyImg} alt={t("home.typography.alt")} />
          <div className="card-content">
            <h3>{t("home.typography.title")}</h3>
            <p>{t("home.typography.description")}</p>
            <button>{t("home.typography.button")}</button>
          </div>
        </Link>
        <Link to="illustration" className="card">
          <img src={IllustrationImg} alt={t("home.illustration.alt")} />
          <div className="card-content">
            <h3>{t("home.illustration.title")}</h3>
            <p>{t("home.illustration.description")}</p>
            <button>{t("home.illustration.button")}</button>
          </div>
        </Link>
        <Link to="design" className="card">
          <img src={Design3DImg} alt={t("home.design.alt")} />
          <div className="card-content">
            <h3>{t("home.design.title")}</h3>
            <p>{t("home.design.description")}</p>
            <button>{t("home.design.button")}</button>
          </div>
        </Link>
        <Link to="animation" className="card">
          <img src={AnimationImg} alt={t("home.animation.alt")} />
          <div className="card-content">
            <h3>{t("home.animation.title")}</h3>
            <p>{t("home.animation.description")}</p>
            <button>{t("home.animation.button")}</button>
          </div>
        </Link>
        <Link to="web" className="card">
          <img src={WebImg} alt={t("home.web.alt")} />
          <div className="card-content">
            <h3>{t("home.web.title")}</h3>
            <p>{t("home.web.description")}</p>
            <button>{t("home.web.button")}</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      ↑
    </div>
  );
};

const RoadmapWrapper = () => {
  const { roadmapId } = useParams();
  return <Roadmap roadmapId={roadmapId} />;
};

export default Reference;
