import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./componenets/AppBar";

import FreindsSidebar from "./componenets/FreindsSidebar";
import Sidebar from "./componenets/Sidebar";

// import data from "./assets/posts.json";
// --------------Screens -------------------
import FeedScreen from "./screens/FeedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FriendListScreen from "./screens/FriendListScreen";
import FriendProfileScreen from "./screens/FriendProfileScreen";
// ------------Styles ---------------------
import "./styles/FeedStyle.css";
import "./styles/golbalStyles.css";
import "./styles/layoutStyle.css";
import GroupScreen from "./screens/GroupScreen";
import ProfilePhotoScreen from "./screens/ProfilePhotoScreen";
import ProfileVideoScreen from "./screens/ProfileVideoScreen";
import ProfileEventScreen from "./screens/ProfileEventScreen";
import ProfileBadgeScreen from "./screens/ProfileBadgeScreen";
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
          <Route path="profile-image" element={<ProfilePhotoScreen />} />
          <Route path="profile-badge" element={<ProfileBadgeScreen />} />
          <Route path="profile-event" element={<ProfileEventScreen />} />
          <Route path="profile-video" element={<ProfileVideoScreen />} />
          <Route path="friends" element={<FriendListScreen />} />
          <Route path="friendprofile" element={<FriendProfileScreen />} />
          <Route path="group" element={<GroupScreen />} />
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
