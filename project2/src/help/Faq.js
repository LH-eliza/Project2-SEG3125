import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

const FAQ = () => {
  const { t } = useTranslation();
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const faqs = [
    {
      question: t("faq.uploadQuestion"),
      answer: t("faq.uploadAnswer"),
    },
    {
      question: t("faq.checkReviewsQuestion"),
      answer: t("faq.checkReviewsAnswer"),
    },
    {
      question: t("faq.giveReviewQuestion"),
      answer: t("faq.giveReviewAnswer"),
    },
    {
      question: t("faq.roadmapsLevelQuestion"),
      answer: t("faq.roadmapsLevelAnswer"),
    },
    {
      question: t("faq.roadmapDurationQuestion"),
      answer: t("faq.roadmapDurationAnswer"),
    },
    {
      question: t("faq.designPortfolioQuestion"),
      answer: t("faq.designPortfolioAnswer"),
    },
    {
      question: t("faq.moreTipsQuestion"),
      answer: t("faq.moreTipsAnswer"),
    },
    {
      question: t("faq.newGuidesQuestion"),
      answer: t("faq.newGuidesAnswer"),
    },
  ];

  const toggleFAQ = (index) => {
    if (selectedFAQ === index) {
      setSelectedFAQ(null);
    } else {
      setSelectedFAQ(index);
    }
  };

  return (
    <div className="faq-container">
      <h2>{t("faq.title")}</h2>
      <p>{t("faq.description")}</p>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${selectedFAQ === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {selectedFAQ === index ? "▲" : "▼"}
              </span>
            </div>
            {selectedFAQ === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
