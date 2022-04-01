import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useMediaQuery } from "@mui/material";
import UserCard from "../reusable/UserCard";

import "../styles/FriendsSidebar.css";

function FreindsSidebar({ fsidebar }) {
  const matches = useMediaQuery("(min-width:980px)");
  const matches1300 = useMediaQuery("(min-width:1300px)");
  const matchesbig = useMediaQuery("(min-width:1500px)");
  const runFunc = () => {
    if (!matches) {
      fsidebar.current.classList.toggle("show");
      fsidebar.current.classList.toggle("close");
      return;
    }
    fsidebar.current.classList.toggle("close");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar-mobile">
        <ArrowForwardIcon onClick={runFunc} style={{ marginLeft: 10 }} />
      </div>

      <div className="">
        <nav
          ref={fsidebar}
          className={`fsidebar ${!matchesbig && "close"} ${
            !matches1300 && "hide"
          }
    `}
        >
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />

                <li className="nav-link">
                  <a href="/">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="text nav-text">Dashboard</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default FreindsSidebar;
