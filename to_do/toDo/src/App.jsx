import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer"
import User from "./Components/User"

import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

import "./App.css";
import Contact from "./Components/Contact";

//   /user/abcdefghijklmnopqrstuvwxyz

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/user/:id" element = {<User />} />
        <Route path="/user/sad" element = {<Contact />} />
      </Routes>

      <Footer/>
    </Router>

  );
}

export default App;
