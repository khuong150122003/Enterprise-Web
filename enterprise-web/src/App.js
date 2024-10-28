import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import "./App.css";
import Footer from "./pages/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<div>Classes Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="/login" element={<div>Login/Register Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
