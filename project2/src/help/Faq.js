import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I upload my own art?",
    answer:
      "To upload your own art, navigate to the 'Upload' section, click on the 'Choose File' button, select your artwork, and hit 'Submit'. Ensure your file is in an acceptable format like .jpg, .png, or .svg.",
  },
  {
    question: "How do I check my reviews on the art?",
    answer:
      "You can check your reviews by going to your profile page and clicking on the 'Reviews' tab. Here, you'll find all the feedback left by other users on your uploaded artworks.",
  },
  {
    question: "How do I give a review?",
    answer:
      "To give a review, visit the artwork you want to review, scroll down to the 'Reviews' section, and click on 'Add Review'. Write your thoughts and hit 'Submit'.",
  },
  {
    question: "Are all the roadmaps for the same level?",
    answer:
      "No, our roadmaps are tailored for different levels, from beginners to advanced users. Each roadmap clearly indicates the required skill level.",
  },
  {
    question: "How long does a roadmap take?",
    answer:
      "The duration of a roadmap varies depending on its complexity and your pace. On average, a roadmap can take anywhere from a few weeks to a few months to complete.",
  },
  {
    question: "Is there a way to design my portfolio?",
    answer:
      "Yes, our platform offers a 'Portfolio Builder' feature that helps you organize and showcase your artwork professionally. You can add, remove, and rearrange pieces easily.",
  },
  {
    question: "Are there more tips on the art?",
    answer:
      "Absolutely! Each guide and tutorial comes with additional tips and tricks to help you improve your skills. Check out the 'Tips' section in each guide.",
  },
  {
    question: "When will there be new guides?",
    answer:
      "We release new guides on a monthly basis. Stay tuned to our 'Updates' section or subscribe to our newsletter to get notified about new releases.",
  },
];

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (selectedFAQ === index) {
      setSelectedFAQ(null);
    } else {
      setSelectedFAQ(index);
    }
  };

  return (
    <div className="faq-container">
      <h2>Frequently asked questions</h2>
      <p>
        Can’t find the answer you’re looking for? Reach out to our design team!
      </p>
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
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
