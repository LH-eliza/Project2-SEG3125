import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import "./Reference.css";
import TypographyImg from "./Images/Typography.png";
import IllustrationImg from "./Images/Illustration.png";
import Design3DImg from "./Images/3D.png";
import WebImg from "./Images/Web.png";
import AnimationImg from "./Images/Animation.png";
import Roadmap from "./Roadmap";

function Reference() {
  return (
    <div className="top">
      <div className="Roadmap-header">
        <p>References</p>
      </div>
      <div className="app">
        <div className="sidebar">
          <h2>Roadmaps</h2>
          <nav>
            <ul>
              <li>
                <Link to="typography">Typography Roadmap</Link>
              </li>
              <li>
                <Link to="illustration">Illustration Roadmap</Link>
              </li>
              <li>
                <Link to="design">3D Design Roadmap</Link>
              </li>
              <li>
                <Link to="animation">Animation Roadmap</Link>
              </li>
              <li>
                <Link to="web">Web Roadmap</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":roadmapId" element={<RoadmapWrapper />} />
            <Route path="*" element={<h1>Page is still in development</h1>} />
          </Routes>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

const Home = () => (
  <div className="home">
    <h1>Welcome to InnovArt Roadmaps</h1>
    <p>
      Welcome to InnovArt's Roadmaps, your comprehensive guides to mastering
      various design disciplines. Our roadmaps offer step-by-step guidance and
      practical projects to enhance your learning experience. Whether you're a
      beginner or looking to refine your expertise, our roadmaps provide the
      knowledge and resources you need.
    </p>
    <div className="roadmap-cards">
      <Link to="typography" className="card">
        <img src={TypographyImg} alt="Typography Roadmap" />
        <div className="card-content">
          <h3>Typography Roadmap</h3>
          <p>
            Begin your journey with typography. Learn the essentials, from
            understanding typefaces and fonts to advanced techniques like
            kerning and typography hierarchy. Apply your skills with practical
            projects.
          </p>
          <button>Get Started with Typography →</button>
        </div>
      </Link>
      <Link to="illustration" className="card">
        <img src={IllustrationImg} alt="Illustration Roadmap" />
        <div className="card-content">
          <h3>Illustration Roadmap</h3>
          <p>
            Unlock your creativity with our Illustration Roadmap. Learn basic
            sketching to digital illustration, explore various styles, and work
            on projects to develop your unique artistic voice.
          </p>
          <button>Get Started with Illustration →</button>
        </div>
      </Link>
      <Link to="design" className="card">
        <img src={Design3DImg} alt="3D Design Roadmap" />
        <div className="card-content">
          <h3>3D Design Roadmap</h3>
          <p>
            Step into 3D design. Learn principles of 3D modeling, texturing, and
            rendering using industry-standard software. Tackle projects that
            simulate real-world design challenges.
          </p>
          <button>Get Started with 3D Design →</button>
        </div>
      </Link>
      <Link to="animation" className="card">
        <img src={AnimationImg} alt="Animation Roadmap" />
        <div className="card-content">
          <h3>Animation Roadmap</h3>
          <p>
            Bring your ideas to life with animation. Whether 2D, 3D, or
            stop-motion, learn animation principles and techniques through
            tutorials and hands-on projects.
          </p>
          <button>Get Started with Animation →</button>
        </div>
      </Link>
      <Link to="web" className="card">
        <img src={WebImg} alt="Web Roadmap" />
        <div className="card-content">
          <h3>Web Roadmap</h3>
          <p>
            Refine your web development skills. Learn tools and techniques for
            front-end and back-end development, UX/UI design, and more. Work on
            projects to enhance your capabilities.
          </p>
          <button>Get Started with Web →</button>
        </div>
      </Link>
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
