// Reference.js
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Reference.css";

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
                <Link to="/reference/typography">Typography Roadmap</Link>
              </li>
              <li>
                <Link to="/reference/illustration">Illustration Roadmap</Link>
              </li>
              <li>
                <Link to="/reference/3d-design">3D Design Roadmap</Link>
              </li>
              <li>
                <Link to="/reference/animation">Animation Roadmap</Link>
              </li>
              <li>
                <Link to="/reference/web">Web Roadmap</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route
              path="typography"
              element={<Roadmap title="Typography Roadmap" />}
            />
            <Route
              path="illustration"
              element={<Roadmap title="Illustration Roadmap" />}
            />
            <Route
              path="3d-design"
              element={<Roadmap title="3D Design Roadmap" />}
            />
            <Route
              path="animation"
              element={<Roadmap title="Animation Roadmap" />}
            />
            <Route path="web" element={<Roadmap title="Web Roadmap" />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
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
      <Link to="/reference/typography" className="card">
        <img src="path-to-your-image/typography.png" alt="Typography Roadmap" />
        <h3>Typography Roadmap</h3>
        <p>
          Begin your journey with typography. Learn the essentials, from
          understanding typefaces and fonts to advanced techniques like kerning
          and typography hierarchy. Apply your skills with practical projects.
        </p>
        <button>Get Started with Typography →</button>
      </Link>
      <Link to="/reference/illustration" className="card">
        <img
          src="path-to-your-image/illustration.png"
          alt="Illustration Roadmap"
        />
        <h3>Illustration Roadmap</h3>
        <p>
          Unlock your creativity with our Illustration Roadmap. Learn basic
          sketching to digital illustration, explore various styles, and work on
          projects to develop your unique artistic voice.
        </p>
        <button>Get Started with Illustration →</button>
      </Link>
      <Link to="/reference/3d-design" className="card">
        <img src="path-to-your-image/3d-design.png" alt="3D Design Roadmap" />
        <h3>3D Design Roadmap</h3>
        <p>
          Step into 3D design. Learn principles of 3D modeling, texturing, and
          rendering using industry-standard software. Tackle projects that
          simulate real-world design challenges.
        </p>
        <button>Get Started with 3D Design →</button>
      </Link>
      <Link to="/reference/animation" className="card">
        <img src="path-to-your-image/animation.png" alt="Animation Roadmap" />
        <h3>Animation Roadmap</h3>
        <p>
          Bring your ideas to life with animation. Whether 2D, 3D, or
          stop-motion, learn animation principles and techniques through
          tutorials and hands-on projects.
        </p>
        <button>Get Started with Animation →</button>
      </Link>
      <Link to="/reference/web" className="card">
        <img src="path-to-your-image/web.png" alt="Web Roadmap" />
        <h3>Web Roadmap</h3>
        <p>
          Refine your editing skills. Learn tools and techniques for video and
          photo editing using software like Adobe Premiere Pro and Photoshop.
          Work on projects to enhance your capabilities.
        </p>
        <button>Get Started with Editing →</button>
      </Link>
    </div>
  </div>
);

const Roadmap = ({ title }) => (
  <div className="roadmap">
    <h1>{title}</h1>
    {/* Content for the specific roadmap */}
  </div>
);

export default Reference;
