import React, { useState } from "react";
import "./Inspiration.css";

import architect from "./images/architect.jpg";
import threed from "./images/3d.png";
import threeed from "./images/3d-ish.png";
import threeeed from "./images/3dd.png";
import typography from "./images/typography.png";
import types from "./images/type.jpg";
import brand from "./images/brand.png";
import branding from "./images/branding.png";
import cyberpunk from "./images/cyberpunk.png";
import interfaceDesign from "./images/interface-design.png";
import interfaces from "./images/interface.png";
import minimalistFonts from "./images/minimalist-font.png";
import robot from "./images/Robot.mp4";
import rollSafeCoin from "./images/roll-safe-coin.png";
import thePainter from "./images/the-painter.png";
import ui from "./images/ui.jpg";
import ux from "./images/ux.png";
import webDesign from "./images/web-design.png";
import web from "./images/web.png";

const inspirationItemsData = [
  {
    title: "The Archers",
    image: rollSafeCoin,
    author: "Steve Wolf",
    likes: 512,
    views: 99300,
    category: "Illustration",
    liked: false,
  },
  {
    title: "Debit Card Design",
    image: thePainter,
    author: "Ben Didier",
    likes: 168,
    views: 32400,
    category: "Illustration",
    liked: false,
  },
  {
    title: "Santorini",
    image: cyberpunk,
    author: "Guillaume Kurkdjian",
    likes: 418,
    views: 84100,
    category: "Illustration",
    liked: false,
  },
  {
    title: "Build Together",
    image: webDesign,
    author: "Awsmd",
    likes: 233,
    views: 28600,
    category: "Web",
    liked: false,
  },
  {
    title: "ODI",
    image: interfaceDesign,
    author: "Angie Mathot",
    likes: 119,
    views: 25300,
    category: "Web",
    liked: false,
  },
  {
    title: "Vande",
    image: ux,
    author: "Marina Zakharova",
    likes: 78,
    views: 11700,
    category: "Web",
    liked: false,
  },
  {
    title: "Star Wars Badges",
    video: robot, // Example video URL
    author: "Aleksandar Savic",
    likes: 87,
    views: 12200,
    category: "Animation",
    liked: false,
  },
  {
    title: "Vintage Train",
    video: robot, // Example video URL
    author: "Ann-Sophie De Steur",
    likes: 33,
    views: 5000,
    category: "Animation",
    liked: false,
  },
  {
    title: "The Painter",
    video: robot, // Example video URL
    author: "John Doe",
    likes: 202,
    views: 65100,
    category: "Animation",
    liked: false,
  },
  {
    title: "Cityscape",
    image: threeed,
    author: "Jane Doe",
    likes: 150,
    views: 45000,
    category: "3D Design",
    liked: false,
  },
  {
    title: "Robot?",
    image: threed,
    author: "Michael Smith",
    likes: 340,
    views: 78000,
    category: "3D Design",
    liked: false,
  },
  {
    title: "Blender base keyboard",
    image: threeeed,
    author: "Emily Johnson",
    likes: 290,
    views: 62000,
    category: "3D Design",
    liked: false,
  },
  {
    title: "Creative Typography",
    image: types,
    author: "Alice Brown",
    likes: 95,
    views: 21400,
    category: "Typography",
    liked: false,
  },
  {
    title: "Minimalist Fonts",
    image: minimalistFonts,
    author: "David Green",
    likes: 111,
    views: 31000,
    category: "Typography",
    liked: false,
  },
  {
    title: "Bold Letters",
    image: typography,
    author: "Sophia Lee",
    likes: 130,
    views: 27000,
    category: "Typography",
    liked: false,
  },
  {
    title: "UI Design Concept",
    image: interfaces,
    author: "Chris White",
    likes: 220,
    views: 50000,
    category: "UI/UX",
    liked: false,
  },
  {
    title: "UX Journey",
    image: ui,
    author: "Lisa Black",
    likes: 310,
    views: 68000,
    category: "UI/UX",
    liked: false,
  },
  {
    title: "Interface Design",
    image: web,
    author: "Tom Hanks",
    likes: 270,
    views: 60000,
    category: "UI/UX",
    liked: false,
  },
  {
    title: "Brand Identity",
    image: architect,
    author: "Angela Adams",
    likes: 320,
    views: 74000,
    category: "Branding",
    liked: false,
  },
  {
    title: "Logo Design",
    image: branding,
    author: "Paul Walker",
    likes: 410,
    views: 86000,
    category: "Branding",
    liked: false,
  },
  {
    title: "Marketing Materials",
    image: brand,
    author: "Nancy Drew",
    likes: 390,
    views: 83000,
    category: "Branding",
    liked: false,
  },
];

const categories = [
  "Illustration",
  "Web",
  "Animation",
  "3D Design",
  "Typography",
  "UI/UX",
  "Branding",
];

function Inspiration() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [inspirationItems, setInspirationItems] =
    useState(inspirationItemsData);

  const filteredItems = inspirationItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearchTerm =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const handleLike = (index) => {
    const newItems = [...inspirationItems];
    if (newItems[index].liked) {
      newItems[index].likes -= 1;
      newItems[index].liked = false;
    } else {
      newItems[index].likes += 1;
      newItems[index].liked = true;
    }
    setInspirationItems(newItems);
  };

  return (
    <div className="inspiration">
      <div className="guide-header">
        <p>Inspiration</p>
      </div>
      <header className="inspiration-header">
        <h1>Discover our Community's Work</h1>
        <p>
          InnovArt is the place destination to find & showcase creative work and
          home to the best design guides.
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search through your community"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <div className="inspiration-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        <button
          className={`filter-button ${
            selectedCategory === "All" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
      </div>
      <div className="inspiration-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="inspiration-card">
            <div className="image-container">
              {item.category === "Animation" ? (
                <video
                  src={item.video}
                  className="inspiration-video"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  loop
                  muted
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="inspiration-image"
                />
              )}
              <div className="hover-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <div
                  className={`like-button ${item.liked ? "liked" : ""}`}
                  onClick={() => handleLike(index)}
                >
                  ❤️ {item.likes}
                </div>
              </div>
            </div>
            <div className="inspiration-info">
              <p>by {item.author}</p>
              <div className="inspiration-stats">
                <span>👀 {item.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inspiration;
