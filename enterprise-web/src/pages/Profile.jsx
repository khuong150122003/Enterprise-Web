import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <li>
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
    </li>
  );
};

export default Profile;
