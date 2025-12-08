import React from "react";
import { Link } from "react-router-dom";
import {NavbarStyle} from "./navbar-style.js";

const NavBar = () => {
  return (
    <NavbarStyle>
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/promise">Promise</Link></li>
        <li><Link to="/trusted">Trusted By</Link></li>
        <li><Link to="/course">Course</Link></li>
        <li><Link to="/excellence/1">Excellence</Link></li>
        <li><Link to="/impact">Impact</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
             <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
    </NavbarStyle>
  );
};

export default NavBar;
