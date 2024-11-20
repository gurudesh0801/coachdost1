// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import CoachProfileContainer from "./Components/Coaches/CoachProfileContainer";
import Footer from "./Components/Footer/Footer";
import StickyFooterBar from "./Components/StickyFooterBar/StickyFooterBar";
import Loading from "./Components/Loading/Loading";

const AppContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <StickyFooterBar />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationEnd = () => {
    setIsLoading(false);
  };
  return (
    <Router>
      {isLoading ? (
        <Loading onAnimationEnd={handleAnimationEnd} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

export default App;
