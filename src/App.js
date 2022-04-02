import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import AppBar from "./componenets/AppBar";
import FreindsSidebar from "./componenets/FreindsSidebar";
import Fuck from "./componenets/Fuck";
import Post from "./componenets/Post";
import Sidebar from "./componenets/Sidebar";
import VerticalContent from "./componenets/VerticalContent";
// import MenuBook from "@mui/icons-material/MenuBook";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Post from "./componenets/Post";
// import Story from "./componenets/Story";
import "./styles/FeedStyle.css";
import "./styles/golbalStyles.css";
function App() {
  let visible = true;
  // const [visible, setVisible] = useState(true);
  // const [visibleFr, setVisibleFr] = useState(true);
  const matchesbig = useMediaQuery("(min-width:1500px)");
  // const matches1300 = useMediaQuery("(min-width:1300px)");
  const matches = useMediaQuery("(min-width:980px)");
  const matchesmobile = useMediaQuery("(min-width:680px)");

  const sidebar = React.useRef(null);
  const fsidebar = React.useRef(null);

  return (
    <>
      <AppBar sidebar={sidebar} />
      <main
        className={`appcontainer ${!matchesbig ? "container-tab" : null} ${
          !matchesmobile ? "container-mobile" : null
        }`}
      >
        <div></div>
        <div className="sidebar-fixed">
          {visible && (
            <div>
              <Sidebar sidebar={sidebar} />
            </div>
          )}
        </div>
        <div className={`content ${!matches ? "content-pad" : null} `}>
          <div className="posts">
            <Post />
          </div>
          {/* <Fuck /> */}
          {matches && <VerticalContent />}
        </div>
        <div></div>
        <div className="friendsSidebar">
          {visible && <FreindsSidebar fsidebar={fsidebar} />}
        </div>
      </main>
    </>
  );
}

export default App;
