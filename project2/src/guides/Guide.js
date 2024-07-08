import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "./Guide.css";
import GuideDetail from "./GuideDetail";

const guides = [
  {
    route: "adobe-illustrator",
    title: "Adobe Illustrator Guide",
    style: "Illustration",
    description:
      "Begin your journey with typography. Learn the essentials, from understanding typefaces and fonts to advanced techniques like kerning and typography hierarchy. Apply your skills with practical projects.",
  },
  {
    route: "adobe-photoshop",
    title: "Adobe Photoshop Guide",
    style: "Editing",
    description:
      "Unlock your creativity with our Illustration Roadmap. Learn basic sketching to digital illustration, explore various styles, and work on projects to develop your unique artistic voice.",
  },
  {
    route: "adobe-animate",
    title: "Adobe Animate Guide",
    style: "Animation",
    description:
      "Step into 3D design. Learn principles of 3D modeling, texturing, and rendering using industry-standard software. Tackle projects that simulate real-world design challenges.",
  },
  {
    route: "after-effects",
    title: "Adobe After Effects Guide",
    style: "Editing",
    description:
      "Bring your ideas to life with animation. Whether 2D, 3D, or stop-motion, learn animation principles and techniques through tutorials and hands-on projects.",
  },
  {
    route: "adobe-xd",
    title: "Adobe XD Guide",
    style: "UX/UI",
    description:
      "Refine your editing skills. Learn tools and techniques for video and photo editing using software like Adobe Premiere Pro and Photoshop. Work on projects to enhance your capabilities.",
  },
  {
    route: "canva",
    title: "Canva Guide",
    style: "Editing",
    description:
      "Refine your editing skills. Learn tools and techniques for video and photo editing using software like Adobe Premiere Pro and Photoshop. Work on projects to enhance your capabilities.",
  },
  {
    route: "spline",
    title: "Spline Guide",
    style: "3D Design",
    description:
      "Refine your editing skills. Learn tools and techniques for video and photo editing using software like Adobe Premiere Pro and Photoshop. Work on projects to enhance your capabilities.",
  },
  {
    route: "procreate",
    title: "Procreate Guide",
    style: "Illustration",
    description:
      "Refine your editing skills. Learn tools and techniques for video and photo editing using software like Adobe Premiere Pro and Photoshop. Work on projects to enhance your capabilities.",
  },
  {
    route: "procreate-dreams",
    title: "Procreate Dreams Guide",
    style: "Animation",
    description:
      "Refine your editing skills. Learn tools and techniques for video and photo editing using software like Adobe Premiere Pro and Photoshop. Work on projects to enhance your capabilities.",
  },
  {
    route: "figma",
    title: "Figma Guide",
    style: "UX/UI",
    description:
      "Refine your editing skills. Learn tools and techniques for video and photo editing using software like Adobe Premiere Pro and Photoshop. Work on projects to enhance your capabilities.",
  },
];

function Guides() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("All Styles");

  const filteredGuides = guides.filter((guide) => {
    const matchesStyle =
      selectedStyle === "All Styles" || guide.style === selectedStyle;
    const matchesSearchTerm = guide.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStyle && matchesSearchTerm;
  });

  return (
    <div className="guide-top">
      <div className="guide-header">
        <p>Guides</p>
      </div>
      <div className="guide-app">
        <div className="guide-sidebar">
          <h2>Tool Guide</h2>
          <nav>
            <ul>
              {guides.map((guide, index) => (
                <li key={index}>
                  <Link to={guide.route}>{guide.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
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
                  filteredGuides={filteredGuides}
                />
              }
            />
            <Route path=":guideId" element={<GuideDetailWrapper />} />
            <Route path="*" element={<h1>Page is still in development</h1>} />
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
  filteredGuides,
}) => (
  <div className="guide-home">
    <h1>InnovArt Guides Page of Mastering Design Tools</h1>
    <p>
      Welcome to InnovArt's Guides, your comprehensive guides to mastering
      various design tools. Our guides offer step-by-step guidance and practical
      projects to enhance your learning experience. Whether you're a beginner or
      looking to refine your expertise, our guides provide the knowledge and
      resources you need.
    </p>
    <div className="guide-search-bar">
      <input
        type="text"
        placeholder="Search guides..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value)}
      >
        <option value="All Styles">All Styles</option>
        <option value="Illustration">Illustration</option>
        <option value="Editing">Editing</option>
        <option value="Animation">Animation</option>
        <option value="UX/UI">UX/UI</option>
        <option value="3D Design">3D Design</option>
      </select>
    </div>
    <div className="guide-content">
      {filteredGuides.map((guide, index) => (
        <div key={index} className="guide-card">
          <div className="guide-card-header">
            <h3>{guide.title}</h3>
            <h4>Style: {guide.style}</h4>
          </div>
          <div className="guide-card-content">
            <p>{guide.description}</p>
          </div>
          <Link to={guide.route}>
            <button>Get Started with {guide.title.split(" ")[1]} →</button>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

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
