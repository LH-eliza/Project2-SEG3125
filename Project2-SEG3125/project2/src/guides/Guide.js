import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Guide.css";
import GuideDetail from "./GuideDetail";

const guides = [
  {
    route: "adobe-illustrator",
    title: "guideDetail.adobe_illustrator.title",
    style: "guides.styles.illustration",
    description: "guideDetail.adobe_illustrator.description",
    software: "guides.software.adobe",
  },
  {
    route: "adobe-photoshop",
    title: "guideDetail.adobe_photoshop.title",
    style: "guides.styles.editing",
    description: "guideDetail.adobe_photoshop.description",
    software: "guides.software.adobe",
  },
  {
    route: "adobe-animate",
    title: "guideDetail.adobe_animate.title",
    style: "guides.styles.animation",
    description: "guideDetail.adobe_animate.description",
    software: "guides.software.adobe",
  },
  {
    route: "after-effects",
    title: "guideDetail.adobe_after_effects.title",
    style: "guides.styles.animation",
    description: "guideDetail.adobe_after_effects.description",
    software: "guides.software.adobe",
  },
  {
    route: "adobe-xd",
    title: "guideDetail.adobe_xd.title",
    style: "guides.styles.ux_ui",
    description: "guideDetail.adobe_xd.description",
    software: "guides.software.adobe",
  },
  {
    route: "canva",
    title: "guideDetail.canva.title",
    style: "guides.styles.editing",
    description: "guideDetail.canva.description",
    software: "guides.software.canva",
  },
  {
    route: "spline",
    title: "guideDetail.spline.title",
    style: "guides.styles.3d_design",
    description: "guideDetail.spline.description",
    software: "guides.software.spline",
  },
  {
    route: "procreate",
    title: "guideDetail.procreate.title",
    style: "guides.styles.illustration",
    description: "guideDetail.procreate.description",
    software: "guides.software.procreate",
  },
  {
    route: "procreate-dreams",
    title: "guideDetail.procreate_dreams.title",
    style: "guides.styles.animation",
    description: "guideDetail.procreate_dreams.description",
    software: "guides.software.procreate",
  },
  {
    route: "figma",
    title: "guideDetail.figma.title",
    style: "guides.styles.ux_ui",
    description: "guideDetail.figma.description",
    software: "guides.software.figma",
  },
];

function Guides() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("all_styles");
  const [selectedSoftware, setSelectedSoftware] = useState("all_software");
  const navigate = useNavigate();

  const filteredGuides = guides.filter((guide) => {
    const translatedStyle = t(guide.style).toLowerCase();
    const selectedTranslatedStyle =
      selectedStyle === "all_styles"
        ? "all_styles"
        : t(selectedStyle).toLowerCase();
    const matchesStyle =
      selectedStyle === "all_styles" ||
      translatedStyle === selectedTranslatedStyle;
    const matchesSearchTerm = t(guide.title)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const translatedSoftware = t(guide.software).toLowerCase();
    const selectedTranslatedSoftware =
      selectedSoftware === "all_software"
        ? "all_software"
        : t(selectedSoftware).toLowerCase();
    const matchesSoftware =
      selectedSoftware === "all_software" ||
      translatedSoftware === selectedTranslatedSoftware;

    return matchesStyle && matchesSearchTerm && matchesSoftware;
  });

  return (
    <div className="guide-top">
      <div
        className="guide-header"
        onClick={() => navigate("/guides")}
        style={{ cursor: "pointer" }}
      >
        <p>{t("guides.title")}</p>
      </div>
      <div className="guide-app">
        <div className="guide-sidebar">
          <h2>{t("guides.header")}</h2>
          <nav aria-label={t("guides.navigation")}>
            <ul>
              {guides.map((guide, index) => (
                <li key={index}>
                  <Link to={guide.route}>{t(guide.title)}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="go-back-button" onClick={() => navigate(-1)}>
            {t("guides.go_back")}
          </button>
        </div>
        <div className="guide-content">
          <Routes>
            <Route
              path="/"
              element={
                <GuideHome
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedStyle={selectedStyle}
                  setSelectedStyle={setSelectedStyle}
                  selectedSoftware={selectedSoftware}
                  setSelectedSoftware={setSelectedSoftware}
                  filteredGuides={filteredGuides}
                />
              }
            />
            <Route path=":guideId" element={<GuideDetailWrapper />} />
            <Route
              path="*"
              element={<h1>{t("guides.page_in_development")}</h1>}
            />
          </Routes>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

const GuideHome = ({
  searchTerm,
  setSearchTerm,
  selectedStyle,
  setSelectedStyle,
  selectedSoftware,
  setSelectedSoftware,
  filteredGuides,
}) => {
  const { t } = useTranslation();

  return (
    <div className="guide-home">
      <h1>{t("guides.welcome")}</h1>
      <p>{t("guides.description")}</p>
      <div className="guide-search-bar">
        <input
          type="text"
          placeholder={t("guides.search_placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label={t("guides.search")}
        />
        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          aria-label={t("guides.select_style")}
        >
          <option value="all_styles">{t("guides.styles.all")}</option>
          <option value="guides.styles.illustration">
            {t("guides.styles.illustration")}
          </option>
          <option value="guides.styles.editing">
            {t("guides.styles.editing")}
          </option>
          <option value="guides.styles.animation">
            {t("guides.styles.animation")}
          </option>
          <option value="guides.styles.ux_ui">
            {t("guides.styles.ux_ui")}
          </option>
          <option value="guides.styles.3d_design">
            {t("guides.styles.3d_design")}
          </option>
        </select>
        <select
          value={selectedSoftware}
          onChange={(e) => setSelectedSoftware(e.target.value)}
          aria-label={t("guides.select_software")}
        >
          <option value="all_software">{t("guides.software.all")}</option>
          <option value="guides.software.adobe">
            {t("guides.software.adobe")}
          </option>
          <option value="guides.software.procreate">
            {t("guides.software.procreate")}
          </option>
          <option value="guides.software.canva">
            {t("guides.software.canva")}
          </option>
          <option value="guides.software.spline">
            {t("guides.software.spline")}
          </option>
        </select>
      </div>
      <div className="guide-content">
        {filteredGuides.map((guide, index) => (
          <div key={index} className="guide-card">
            <div className="guide-card-header">
              <h3>{t(guide.title)}</h3>
              <h4>
                {t("guides.style-type.all")}: {t(guide.style)}
              </h4>
            </div>
            <div className="guide-card-content">
              <p>{t(guide.description)}</p>
            </div>
            <Link to={guide.route}>
              <button aria-label={t("guides.get_started")}>
                {t("guides.get_started")} →
              </button>
            </Link>
          </div>
        ))}
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
      className={`guide-scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
      tabIndex="0"
    >
      ↑
    </div>
  );
};

const GuideDetailWrapper = () => {
  const { guideId } = useParams();
  return <GuideDetail guideId={guideId} />;
};

export default Guides;
