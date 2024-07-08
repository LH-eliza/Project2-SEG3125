import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Community from "./community/Community";
import Reference from "./references/Reference";
import Resources from "./resources/Resources";
import Guides from "./guides/Guide";
import Inspiration from "./inspiration/Inspiration";
import ContactUs from "./help/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/reference/*" element={<Reference />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/guides/*" element={<Guides />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<h1>Page is still in development</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
