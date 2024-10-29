import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-container">
        {/* Left side - Contact Information */}
        <div className="contact-info">
          <p>Call us: 086.779.1686</p>
          <p>Email: info@greenwich.edu.vn</p>
        </div>
        {/* Right side - Links */}
        <div className="footer-links">
          <p>
            <Link to="/"> &copy; 2024 Microsoft</Link>
          </p>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/">Privacy & cookies</Link>
          </p>
          <p>
            <Link to="/">Need more help?</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
