import React from "react";
import Search from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";

import "../styles/sidebarStyle.css";
import { Link } from "react-router-dom";

function Sidebar({ sidebar }) {
  const matches1300 = useMediaQuery("(min-width:1300px)");
  const matchesbig = useMediaQuery("(min-width:1500px)");

  return (
    <nav
      ref={sidebar}
      className={`sidebar ${!matchesbig && "close"} ${!matches1300 && "hide"}
     
    `}
    >
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/">
                <Search />
                <span className="text nav-text">NewsFeed</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="profile">
                <Search />
                <span className="text nav-text">Profile</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to={"/friends"}>
                <Search />
                <span className="text nav-text">Friend List</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to={"/friendprofile"}>
                <Search />
                <span className="text nav-text">Friend Profile</span>
              </Link>
            </li>
            <li className="nav-link">
              <a href="/">
                <Search />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/">
                <Search />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/">
                <Search />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/">
                <Search />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/">
                <Search />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="/">
                <Search />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
