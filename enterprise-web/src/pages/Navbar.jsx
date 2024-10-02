import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links-left">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/classes" className="nav-link">
            Classes
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
      </ul>

      <ul className="nav-links-right">
        <li>
          <Link to="/login" className="nav-link">
            Login/Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
