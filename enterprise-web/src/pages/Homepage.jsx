import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes.jsx";
import Profile from "./Profile.jsx";
import Login from "./Login.jsx";

const HomePage = () => {
  return (
    <div>
      <div className="logo-container">
        <img
          src="/img/logouni.jpg"
          alt="University Logo"
          className="logo-image"
        />
      </div>

      <header>
        <Navbar />
      </header>

      <main>
        <div className="home-content">
          <h1>
            WELCOME TO <br />
            UNIVERSITY OF GREENWICH
          </h1>
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
      <ul className="nav-links-left">
        {/* <li>
         <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <Classes /> 
        <Profile />*/}
      </ul>

      <ul className="nav-links-right">
        <Login />
      </ul>
    </nav>
  );
};

export default HomePage;
