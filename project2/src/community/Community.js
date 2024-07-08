import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Community.css";

const Community = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const fakeComments = ["Great work!", "Love this piece!", "Very creative!"];

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!uploadedImage || !title || !description || !category) {
      setError("All fields are required and an image must be uploaded.");
      return;
    }

    const newSubmission = {
      image: uploadedImage,
      title,
      description,
      category,
      comments: fakeComments,
    };
    setSubmissions([...submissions, newSubmission]);
    setUploadedImage(null);
    setTitle("");
    setDescription("");
    setCategory("");
    setError("");
  };

  const handleDelete = (index) => {
    setSubmissions(submissions.filter((_, i) => i !== index));
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "submissions.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="community-container">
      <div className="community-header">
        <p>Community</p>
      </div>
      <div className="upload-section">
        <h1>Upload Art</h1>
        <p>Drag or Upload your Art Here</p>
        <div className="upload-box" {...getRootProps()}>
          <input {...getInputProps()} />
          <span>+</span>
        </div>
        {uploadedImage && (
          <div className="uploaded-image">
            <p className="preview-label">Preview of image:</p>
            <img src={uploadedImage} alt="Uploaded Art" />
          </div>
        )}
        <input
          type="text"
          placeholder="Title"
          className={`input-field ${error && !title ? "error" : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className={`input-field ${error && !description ? "error" : ""}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className={`select-field ${error && !category ? "error" : ""}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Illustration">Illustration</option>
          <option value="Typography">Typography</option>
          <option value="Photography">Photography</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Web Design">Web Design</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <h2>View your Art Board</h2>
      <div className="community-board">
        {submissions.map((submission, index) => (
          <div
            className="community-card"
            key={index}
            onClick={() => setSelectedSubmission(submission)}
          >
            <img
              src={submission.image}
              alt={submission.title}
              className="card-image"
            />
            <div className="card-content">
              <h3>{submission.title}</h3>
              <p>Type - {submission.category}</p>
              <p>{submission.description}</p>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedSubmission && (
        <div className="comments-section">
          <h3>Comments for {selectedSubmission.title}</h3>
          <ul>
            {selectedSubmission.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="export-button" onClick={handleExport}>
        Export All Art
      </button>
      <button
        className="see-more-button"
        onClick={() => (window.location.href = "/inspiration")}
      >
        See Our Community Art Boards
      </button>
    </div>
  );
};

export default Community;
