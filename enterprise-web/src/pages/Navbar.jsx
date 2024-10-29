import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes.jsx";
import Profile from "./Profile.jsx";
import Login from "./Login.jsx";

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
          <Profile>Profile</Profile>
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
