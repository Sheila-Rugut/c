import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Campgrounds from "./components/Campgrounds";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campgrounds" element={<Campgrounds />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
