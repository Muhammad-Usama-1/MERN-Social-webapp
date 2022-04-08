import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./componenets/AppBar";
import FreindsSidebar from "./componenets/FreindsSidebar";

import Sidebar from "./componenets/Sidebar";

import "./styles/FeedStyle.css";
import "./styles/golbalStyles.css";
import "./styles/layoutStyle.css";
// import data from "./assets/posts.json";
import FeedScreen from "./screens/FeedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FriendListScreen from "./screens/FriendListScreen";
import FriendProfileScreen from "./screens/FriendProfileScreen";
function App() {
  // console.log(data);
  // let visible = true;
  const sidebar = React.useRef(null);
  const fsidebar = React.useRef(null);

  return (
    <BrowserRouter>
      <AppBar sidebar={sidebar} />
      <main className="container">
        <div></div>
        <div className="sidebar-fixed">
          <Sidebar sidebar={sidebar} />
        </div>
        <Routes>
          <Route path="/" element={<FeedScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="friends" element={<FriendListScreen />} />
          <Route path="/friendprofile" element={<FriendProfileScreen />} />
        </Routes>
        <div></div>
        <div className="friendsSidebar">
          <FreindsSidebar fsidebar={fsidebar} />
        </div>
      </main>

      {/* <FeedScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <FriendListScreen /> */}
    </BrowserRouter>
  );
}

export default App;
