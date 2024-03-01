/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Header from "./header/Header";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Footer from "./header/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  const [text, setText] = useState("jitendra saini");

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home Name={text} newText={setText} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
