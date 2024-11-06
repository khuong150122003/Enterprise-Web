import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
        <div className="dropdown">
          <Link to="/">User Management</Link>
          <div className="dropdown-content">
            <Link to="/usermanagement/manager">Manager</Link>
            <Link to="/usermanagement/coordinator">Coordinator</Link>
            <Link to="/usermanagement/student">Student</Link>
          </div>
        </div>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="login-register">
        <Link to="/login">Login/Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
