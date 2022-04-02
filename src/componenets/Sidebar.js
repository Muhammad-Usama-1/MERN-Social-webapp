import { useMediaQuery } from "@mui/material";
import React from "react";

import "../styles/sidebarStyle.css";

function Sidebar({ sidebar }) {
  // const matches = useMediaQuery("(min-width:980px)");
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
              <a href="/">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Revenue</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-bell icon"></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Analytics</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-heart icon"></i>
                <span className="text nav-text">Likes</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-wallet icon"></i>
                <span className="text nav-text">Wallets</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="/">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark mode</span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;