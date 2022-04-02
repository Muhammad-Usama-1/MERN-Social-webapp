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
import data from "./assets/posts.json";
function App() {
  // console.log(data);
  let visible = true;
  // const [visible, setVisible] = useState(true);
  // const [visibleFr, setVisibleFr] = useState(true);
  const matches1500 = useMediaQuery("(min-width:1500px)");
  const matches1300 = useMediaQuery("(min-width:1300px)");
  const matches990 = useMediaQuery("(min-width:990px)");
  const matches680 = useMediaQuery("(min-width:680px)");

  const sidebar = React.useRef(null);
  const fsidebar = React.useRef(null);

  return (
    <>
      <AppBar sidebar={sidebar} />
      <main
        className={`container ${!matches1500 ? "container-1500" : null} ${
          !matches990 ? "container-990" : null
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
        <div
          className={`content ${!matches990 ? "content-990" : null}
        ${!matches680 ? "content-680" : null}
        `}
        >
          <div className="posts">
            {data.map((post) => (
              <Post
                videoUrl={post.videoUrl}
                comments={post.comments}
                images={post.images}
                user={post.user}
                like={post.like}
              />
            ))}
          </div>
          {/* <Fuck /> */}
          {matches990 && <VerticalContent />}
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
