import React from "react";
import { Routes, Route } from "react-router-dom";
// import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Error from "./pages/Error";

import "./main.css";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:logementId" element={<Logement />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
