import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <img src="/img/homepage.jpg" alt="University" className="hero-image" />
      <div className="welcome-text">
        <h1>WELCOME TO</h1>
        <h2>UNIVERSITY OF GREENWICH</h2>
      </div>
    </div>
  );
}

export default Homepage;
