import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-badge">Over 300+ Guides and Resources</div>
      <h1 className="hero-title">
        Resources <span className="for">for</span>{" "}
        <span className="highlight">Designers</span>,<br />
        <span className="for">by</span>{" "}
        <span className="highlight-gradient">Designers</span>.
      </h1>
      <p className="hero-subtitle">
        <span className="subtitle">
          Uncover the most effective resources and tools designed to enhance
          your skills and knowledge, tailored to meet your learning need.
        </span>
      </p>
    </div>
  );
};

export default Hero;
