import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Service from './Service.jsx';
import Excitel_Fiber from "./Excitel_Fibre.jsx";
import Navbar from "./Navbar.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} /> 
        <Route path="/excitel_fibre" element={<Excitel_Fiber />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </div>
  );
}

export default App;
