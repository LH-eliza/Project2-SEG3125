import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="navbar-logo-part1">Innov</span>
          <span className="navbar-logo-part2">Art</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a className="main-item" href="#">
              About Us
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="#">
              References
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Reference 1</a>
              </li>
              <li>
                <a href="#">Reference 2</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="#">
              Guides
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Guide 1</a>
              </li>
              <li>
                <a href="#">Guide 2</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="#">
              Inspiration
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="#">
              Resources
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Resource 1</a>
              </li>
              <li>
                <a href="#">Resource 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
