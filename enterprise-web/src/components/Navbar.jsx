import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="/img/logouni.jpg"
        alt="University Logo"
        className="logo-image"
      />
      <nav>
        <a href="#home">Home</a>
        <a href="#classes">Classes</a>
        <a href="#profile">Profile</a>
      </nav>
      <div className="login-register">
        <a href="#login">Login/Register</a>
      </div>
    </div>
  );
}

export default Navbar;
