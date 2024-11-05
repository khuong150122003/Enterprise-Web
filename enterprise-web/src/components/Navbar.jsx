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
      <div className="login-register">
        <a href="#login">Login/Register</a>
      </div>
    </div>
  );
}

export default Navbar;
