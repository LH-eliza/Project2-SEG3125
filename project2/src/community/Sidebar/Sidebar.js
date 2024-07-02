import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <h2>Menu</h2>
      <nav>
        <ul>
          <li>
            <a href="#upload-art">Upload Art</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
