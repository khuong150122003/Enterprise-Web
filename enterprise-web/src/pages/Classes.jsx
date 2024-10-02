import React from "react";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <li>
      <Link to="/classes" className="nav-link">
        Classes
      </Link>
    </li>
  );
};

export default Classes;
