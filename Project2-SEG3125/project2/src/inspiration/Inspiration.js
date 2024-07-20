// Inspiration.js

import React, { useState } from "react";
import "./Inspiration.css";
import { useTranslation } from "react-i18next";
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
import robot from "./images/robot.png";
import lemon from "./images/lemon.png";
import quasar from "./images/quasar.png";
import rollSafeCoin from "./images/roll-safe-coin.png";
import thePainter from "./images/the-painter.png";
import ui from "./images/ui.jpg";
import ux from "./images/ux.png";
import webDesign from "./images/web-design.png";
import web from "./images/web.png";

const Inspiration = () => {
  const { t } = useTranslation();

  const inspirationItemsData = [
    {
      title: t("inspiration_items.the_archers.title"),
      image: rollSafeCoin,
      author: t("inspiration_items.the_archers.author"),
      likes: 512,
      views: 99300,
      category: "Illustration",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.debit_card_design.title"),
      image: thePainter,
      author: t("inspiration_items.debit_card_design.author"),
      likes: 168,
      views: 32400,
      category: "Illustration",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.santorini.title"),
      image: cyberpunk,
      author: t("inspiration_items.santorini.author"),
      likes: 418,
      views: 84100,
      category: "Illustration",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.build_together.title"),
      image: webDesign,
      author: t("inspiration_items.build_together.author"),
      likes: 233,
      views: 28600,
      category: "Web",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.odi.title"),
      image: interfaceDesign,
      author: t("inspiration_items.odi.author"),
      likes: 119,
      views: 25300,
      category: "Web",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.vande.title"),
      image: ux,
      author: t("inspiration_items.vande.author"),
      likes: 78,
      views: 11700,
      category: "Web",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.star_wars_badges.title"),
      image: robot,
      author: t("inspiration_items.star_wars_badges.author"),
      likes: 87,
      views: 12200,
      category: "Animation",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.vintage_train.title"),
      image: lemon,
      author: t("inspiration_items.vintage_train.author"),
      likes: 33,
      views: 5000,
      category: "Animation",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.the_painter.title"),
      image: quasar,
      author: t("inspiration_items.the_painter.author"),
      likes: 202,
      views: 65100,
      category: "Animation",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.cityscape.title"),
      image: threeed,
      author: t("inspiration_items.cityscape.author"),
      likes: 150,
      views: 45000,
      category: "3D Design",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.robot.title"),
      image: threed,
      author: t("inspiration_items.robot.author"),
      likes: 340,
      views: 78000,
      category: "3D Design",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.blender_base_keyboard.title"),
      image: threeeed,
      author: t("inspiration_items.blender_base_keyboard.author"),
      likes: 290,
      views: 62000,
      category: "3D Design",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.creative_typography.title"),
      image: types,
      author: t("inspiration_items.creative_typography.author"),
      likes: 95,
      views: 21400,
      category: "Typography",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.minimalist_fonts.title"),
      image: minimalistFonts,
      author: t("inspiration_items.minimalist_fonts.author"),
      likes: 111,
      views: 31000,
      category: "Typography",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.bold_letters.title"),
      image: typography,
      author: t("inspiration_items.bold_letters.author"),
      likes: 130,
      views: 27000,
      category: "Typography",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.ui_design_concept.title"),
      image: interfaces,
      author: t("inspiration_items.ui_design_concept.author"),
      likes: 220,
      views: 50000,
      category: "UI/UX",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.ux_journey.title"),
      image: ui,
      author: t("inspiration_items.ux_journey.author"),
      likes: 310,
      views: 68000,
      category: "UI/UX",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.interface_design.title"),
      image: web,
      author: t("inspiration_items.interface_design.author"),
      likes: 270,
      views: 60000,
      category: "UI/UX",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.brand_identity.title"),
      image: architect,
      author: t("inspiration_items.brand_identity.author"),
      likes: 320,
      views: 74000,
      category: "Branding",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.logo_design.title"),
      image: branding,
      author: t("inspiration_items.logo_design.author"),
      likes: 410,
      views: 86000,
      category: "Branding",
      liked: false,
      comments: [],
    },
    {
      title: t("inspiration_items.marketing_materials.title"),
      image: brand,
      author: t("inspiration_items.marketing_materials.author"),
      likes: 390,
      views: 83000,
      category: "Branding",
      liked: false,
      comments: [],
    },
  ];

  const categories = [
    "all",
    "illustration",
    "web",
    "animation",
    "3d design",
    "typography",
    "ui/ux",
    "branding",
  ];

  const [inspirationItems, setInspirationItems] =
    useState(inspirationItemsData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [comment, setComment] = useState("");
  const [alias, setAlias] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState("");

  const filteredItems = inspirationItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.category.toLowerCase() === selectedCategory;
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

  const handleFeedback = (index) => {
    setCurrentItem(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setAlias("");
    setComment("");
    setErrorMessage("");
    setEditingComment(null);
    setEditingCommentText("");
  };

  const submitComment = () => {
    if (!alias.trim() || !comment.trim()) {
      setErrorMessage(t("inspiration.feedback.error_message"));
      return;
    }

    const newItems = [...inspirationItems];
    if (!newItems[currentItem].comments) {
      newItems[currentItem].comments = [];
    }
    newItems[currentItem].comments.push({ alias, comment });
    setInspirationItems(newItems);
    setAlias("");
    setComment("");
    setShowPopup(false);
  };

  const startEditingComment = (itemIndex, commentIndex) => {
    setCurrentItem(itemIndex);
    setEditingComment(commentIndex);
    setEditingCommentText(
      inspirationItems[itemIndex].comments[commentIndex].comment
    );
    setShowPopup(true);
  };

  const submitEditedComment = () => {
    if (!editingCommentText.trim()) {
      setErrorMessage(t("inspiration.feedback.error_message"));
      return;
    }

    const newItems = [...inspirationItems];
    newItems[currentItem].comments[editingComment].comment = editingCommentText;
    setInspirationItems(newItems);
    setEditingComment(null);
    setEditingCommentText("");
    setShowPopup(false);
  };

  const deleteComment = (itemIndex, commentIndex) => {
    const newItems = [...inspirationItems];
    newItems[itemIndex].comments.splice(commentIndex, 1);
    setInspirationItems(newItems);
  };

  return (
    <div className="inspiration">
      <div className="guide-header">
        <p>{t("inspiration.title")}</p>
      </div>
      <header className="inspiration-header">
        <h1>{t("inspiration.header.title")}</h1>
        <p>{t("inspiration.header.description")}</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder={t("inspiration.header.search_placeholder")}
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
            {t(`inspiration.categories.${category}`)}
          </button>
        ))}
      </div>
      <div className="inspiration-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="inspiration-card">
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className="inspiration-image"
              />
              <div className="hover-info">
                <h3>{item.title}</h3>
                <p>{t(item.category)}</p>
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
              <button
                className="feedback-button"
                onClick={() => handleFeedback(index)}
              >
                {t("inspiration.feedback.leave_comment")}
              </button>
              {item.comments && item.comments.length > 0 && (
                <div className="comments-section">
                  <h4>{t("inspiration.feedback.comments_section")}</h4>
                  <ul>
                    {item.comments.map((comment, commentIndex) => (
                      <li key={commentIndex}>
                        <strong>{comment.alias}:</strong> {comment.comment}
                        <button
                          className="edit-comment-button"
                          onClick={() =>
                            startEditingComment(index, commentIndex)
                          }
                        >
                          {t("inspiration.feedback.edit_comment")}
                        </button>
                        <button
                          className="delete-comment-button"
                          onClick={() => deleteComment(index, commentIndex)}
                        >
                          {t("inspiration.feedback.delete_comment")}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{t("inspiration.feedback.leave_comment")}</h2>
            {editingComment === null ? (
              <>
                <input
                  type="text"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder={t("inspiration.feedback.alias_placeholder")}
                />
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={t("inspiration.feedback.comment_placeholder")}
                  rows="4"
                />
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <button onClick={submitComment}>
                  {t("inspiration.feedback.submit_button")}
                </button>
              </>
            ) : (
              <>
                <textarea
                  className="edit-comment-input"
                  value={editingCommentText}
                  onChange={(e) => setEditingCommentText(e.target.value)}
                  rows="4"
                />
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <button onClick={submitEditedComment}>
                  {t("inspiration.feedback.submit_edit_button")}
                </button>
              </>
            )}
            <button onClick={closePopup}>
              {t("inspiration.feedback.close_button")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inspiration;
