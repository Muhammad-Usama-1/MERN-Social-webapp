import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./componenets/AppBar";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

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
import NotificationScreen from "./screens/NotificationScreen";
import NotFound from "./screens/NotFound";
import Layout from "./componenets/Layout";
import AppRoute from "./componenets/AppRoute";
// import AppRoute from "./componenets/APPRoute";
function App() {
  // console.log(data);
  // let visible = true;
  const sidebar = React.useRef(null);
  const fsidebar = React.useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <FeedScreen />
            </Layout>
          }
        />
        <Route
          path="profile"
          element={
            <Layout>
              <ProfileScreen />
            </Layout>
          }
        />

        <Route path="*" element={<NotFound />} />
        <Route
          path="profile-image"
          element={
            <Layout>
              <ProfilePhotoScreen />{" "}
            </Layout>
          }
        />
        <Route
          path="profile-badge"
          element={
            <Layout>
              <ProfileBadgeScreen />{" "}
            </Layout>
          }
        />
        <Route
          path="profile-event"
          element={
            <Layout>
              <ProfileEventScreen />{" "}
            </Layout>
          }
        />
        <Route
          path="notification"
          element={
            <Layout>
              <NotificationScreen />{" "}
            </Layout>
          }
        />
        <Route
          path="profile-video"
          element={
            <Layout>
              <ProfileVideoScreen />
            </Layout>
          }
        />
        <Route
          path="friends"
          element={
            <Layout>
              <FriendListScreen />
            </Layout>
          }
        />
        <Route
          path="friendprofile"
          element={
            <Layout>
              <FriendProfileScreen />
            </Layout>
          }
        />
        <Route
          path="group"
          element={
            <Layout>
              <GroupScreen />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
