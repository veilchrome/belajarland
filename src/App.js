// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import animeJS from "./anime";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/anime" element={<animeJS/>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
