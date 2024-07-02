import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Community from "./community/Community"; // Ensure this is the correct path
import Reference from "./references/Reference"; // Ensure this is the correct path
import Resources from "./resources/Resources"; // Ensure this is the correct path
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
