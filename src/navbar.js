import * as React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export var NavBar = () => {
  <div
    style={{ background: "red", width: "100px", height: "100px", zIndex: 1000 }}
  >
    <nav>
        <ul>
          <li>
            <Link to="/activities">activities</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
  </div>;
};

export default NavBar;
