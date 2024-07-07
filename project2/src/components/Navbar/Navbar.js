import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="/" className="navbar-logo-link">
            <span className="navbar-logo-part1">Innov</span>
            <span className="navbar-logo-part2">Art</span>
          </a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a className="main-item" href="/community">
              Upload Art
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/reference">
              References
            </a>
            {/*             <ul className="dropdown">
              <li>
                <a href="#">Reference 1</a>
              </li>
              <li>
                <a href="#">Reference 2</a>
              </li>
            </ul> */}
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/guides">
              Guides
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/inspiration">
              Inspiration
            </a>
          </li>
          <li className="navbar-item">
            <a className="main-item" href="/resources">
              Resources
            </a>
            {/*            <ul className="dropdown">
              <li>
                <a href="#">Resource 1</a>
              </li>
              <li>
                <a href="#">Resource 2</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
