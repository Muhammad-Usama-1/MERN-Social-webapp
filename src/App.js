import React from "react";
import AppBar from "./componenets/AppBar";
import FreindsSidebar from "./componenets/FreindsSidebar";

import Sidebar from "./componenets/Sidebar";

import "./styles/FeedStyle.css";
import "./styles/golbalStyles.css";
// import data from "./assets/posts.json";
import FeedScreen from "./screens/FeedScreen";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
  // console.log(data);
  // let visible = true;
  const sidebar = React.useRef(null);
  const fsidebar = React.useRef(null);

  return (
    <>
      <AppBar sidebar={sidebar} />
      <main className={`container`}>
        <div></div>
        <div className="sidebar-fixed">
          <Sidebar sidebar={sidebar} />
        </div>
        {/* <FeedScreen /> */}
        <ProfileScreen />
        <div></div>
        <div className="friendsSidebar">
          <FreindsSidebar fsidebar={fsidebar} />
        </div>
      </main>
    </>
  );
}

export default App;
