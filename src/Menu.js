import React from "react";

import "./MenuStyle.css";

import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="MenuStyle">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="about">ABOUT</Link>
        </li>
        <li>
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
