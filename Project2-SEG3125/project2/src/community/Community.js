import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import "./Community.css";

const Community = () => {
  const { t } = useTranslation();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const TITLE_MAX_LENGTH = 25;
  const DESCRIPTION_MAX_LENGTH = 150;

  const fakeComments = t("community.comments_section.fake_comments", {
    returnObjects: true,
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (
      !uploadedImage ||
      !title ||
      !description ||
      !category ||
      title.length > TITLE_MAX_LENGTH ||
      description.length > DESCRIPTION_MAX_LENGTH
    ) {
      setError(t("community.upload_section.error_message"));
      return;
    }

    const newSubmission = {
      image: uploadedImage,
      title,
      description,
      category,
      comments: fakeComments,
    };

    if (isEditing) {
      const updatedSubmissions = [...submissions];
      updatedSubmissions[editIndex] = newSubmission;
      setSubmissions(updatedSubmissions);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setSubmissions([...submissions, newSubmission]);
    }

    setUploadedImage(null);
    setTitle("");
    setDescription("");
    setCategory("");
    setError("");
  };

  const handleEdit = (index) => {
    const submission = submissions[index];
    setUploadedImage(submission.image);
    setTitle(submission.title);
    setDescription(submission.description);
    setCategory(submission.category);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setSubmissions(submissions.filter((_, i) => i !== index));
  };

  const handleExport = (index) => {
    const selectedSubmission = submissions[index];
    const dataStr = JSON.stringify(selectedSubmission, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "submission.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="community-container">
      <header className="community-header">
        <p>{t("community.header")}</p>
      </header>

      <section className="upload-section">
        <h2>{t("community.upload_section.title")}</h2>
        <p>{t("community.upload_section.subtitle")}</p>

        <div
          className="upload-box"
          {...getRootProps()}
          aria-label={t("community.upload_section.dropzone_label")}
          title={t("community.upload_section.dropzone_tooltip")}
        >
          <input
            {...getInputProps()}
            aria-label={t("community.upload_section.input_label")}
          />
          <span aria-hidden="true">+</span>
        </div>

        <p className="rights">{t("community.upload_section.rights")}</p>

        {uploadedImage && (
          <div className="uploaded-image">
            <p className="preview-label">
              {t("community.upload_section.preview_label")}
            </p>
            <img
              src={uploadedImage}
              alt={t("community.upload_section.uploaded_image_alt")}
            />
          </div>
        )}

        <div className="input-wrapper">
          <input
            type="text"
            placeholder={t("community.upload_section.title_placeholder")}
            className={`input-field ${
              error && (!title || title.length > TITLE_MAX_LENGTH)
                ? "error"
                : ""
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label={t("community.upload_section.title_aria")}
            title={t("community.upload_section.title_tooltip")}
          />
          <span
            className={`char-count ${
              title.length > TITLE_MAX_LENGTH ? "error" : ""
            }`}
          >
            {title.length}/{TITLE_MAX_LENGTH}
          </span>
          {title.length > TITLE_MAX_LENGTH && (
            <p className="input-error">
              {t("community.upload_section.max_characters_error")}
            </p>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder={t("community.upload_section.description_placeholder")}
            className={`input-field ${
              error &&
              (!description || description.length > DESCRIPTION_MAX_LENGTH)
                ? "error"
                : ""
            }`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            aria-label={t("community.upload_section.description_aria")}
            title={t("community.upload_section.description_tooltip")}
          />
          <span
            className={`char-count ${
              description.length > DESCRIPTION_MAX_LENGTH ? "error" : ""
            }`}
          >
            {description.length}/{DESCRIPTION_MAX_LENGTH}
          </span>
          {description.length > DESCRIPTION_MAX_LENGTH && (
            <p className="input-error">
              {t("community.upload_section.max_characters_error")}
            </p>
          )}
        </div>

        <select
          className={`select-field ${error && !category ? "error" : ""}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label={t("community.upload_section.category_aria")}
          title={t("community.upload_section.category_tooltip")}
        >
          <option value="">
            {t("community.upload_section.category_placeholder")}
          </option>
          <option value="Illustration">
            {t("community.upload_section.categories.illustration")}
          </option>
          <option value="Typography">
            {t("community.upload_section.categories.typography")}
          </option>
          <option value="Photography">
            {t("community.upload_section.categories.photography")}
          </option>
          <option value="UI/UX">
            {t("community.upload_section.categories.uiux")}
          </option>
          <option value="Web Design">
            {t("community.upload_section.categories.web_design")}
          </option>
          <option value="Graphic Design">
            {t("community.upload_section.categories.graphic_design")}
          </option>
        </select>

        <button
          className="submit-button"
          onClick={handleSubmit}
          aria-label={t("community.upload_section.submit_button")}
          title={t("community.upload_section.submit_tooltip")}
        >
          {isEditing
            ? t("community.upload_section.edit_button")
            : t("community.upload_section.submit_button")}
        </button>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}
      </section>

      <section>
        <h2 className="view">{t("community.view_art_board")}</h2>
        <div className="community-board">
          {submissions.map((submission, index) => (
            <article
              className="community-card"
              key={index}
              tabIndex="0"
              aria-label={t("community.upload_section.submission_aria", {
                title: submission.title,
              })}
              title={t("community.upload_section.submission_tooltip", {
                title: submission.title,
              })}
            >
              <img
                src={submission.image}
                alt={submission.title}
                className="card-image"
              />
              <div className="card-content">
                <h3>{submission.title}</h3>
                <p>{submission.category}</p>
                <p>{submission.description}</p>
                <button
                  className="export-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExport(index);
                  }}
                  aria-label={t("community.upload_section.export_aria", {
                    title: submission.title,
                  })}
                  title={t("community.upload_section.export_tooltip", {
                    title: submission.title,
                  })}
                >
                  📤
                </button>
                <button
                  className="edit-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(index);
                  }}
                  aria-label={t("community.upload_section.edit_aria", {
                    title: submission.title,
                  })}
                  title={t("community.upload_section.edit_tooltip", {
                    title: submission.title,
                  })}
                >
                  ✎
                </button>
                <button
                  className="delete-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                  aria-label={t("community.upload_section.delete_aria", {
                    title: submission.title,
                  })}
                  title={t("community.upload_section.delete_tooltip", {
                    title: submission.title,
                  })}
                >
                  &times;
                </button>
                <div className="comments-sections">
                  <h4>{t("community.comments_section.title")}</h4>
                  <ul>
                    {submission.comments.map((comment, commentIndex) => (
                      <li key={commentIndex}>{comment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="horizontal-line" />

      <section>
        <h2 className="view">{t("community.see_more_art")}</h2>
        <button
          className="see-more-button"
          onClick={() => (window.location.href = "/inspiration")}
          aria-label={t("community.see_more_button")}
          title={t("community.see_more_tooltip")}
        >
          {t("community.see_more_button")}
        </button>
      </section>
    </div>
  );
};

export default Community;
