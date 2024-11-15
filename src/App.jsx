// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import CoachProfileContainer from "./Components/Coaches/CoachProfileContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaches/:id" element={<CoachProfileContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
