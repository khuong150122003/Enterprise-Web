import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <li>
      <Link to="/login" className="nav-link">
        Login/Register
      </Link>
    </li>
  );
};

export default Login;
