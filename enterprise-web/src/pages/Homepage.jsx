import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="home-content">
          <h1>WELCOME TO UNIVERSITY OF GREENWICH</h1>
          <img
            src="/img/homepage.jpg"
            alt="University"
            className="hero-image"
          />
        </div>
      </main>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
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
        <li>
          <Link to="/login" className="nav-link">
            Login/Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomePage;
