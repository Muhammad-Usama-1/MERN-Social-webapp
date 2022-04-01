import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Link() {
  return (
    <li>
      <a href="/">
        <SearchIcon />
        <span className="links_name">Dashboard</span>
        {/* <span className="tooltip">Dashboard</span> */}
      </a>
    </li>
  );
}

export default Link;
