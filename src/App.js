import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ------------Styles ---------------------
import "./styles/golbalStyles.css";
import "./styles/FeedStyle.css";
import "./styles/layoutStyle.css";

// --------------Screens -------------------
import FeedScreen from "./screens/FeedScreen";
import FriendListScreen from "./screens/FriendListScreen";
import FriendProfileScreen from "./screens/FriendProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileVideoScreen from "./screens/ProfileVideoScreen";
import ProfilePhotoScreen from "./screens/ProfilePhotoScreen";
import ProfileEventScreen from "./screens/ProfileEventScreen";
import ProfileBadgeScreen from "./screens/ProfileBadgeScreen";
import GroupScreen from "./screens/GroupScreen";
import NotificationScreen from "./screens/NotificationScreen";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="feed" element={<FeedScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
        <Route path="profile-image" element={<ProfilePhotoScreen />} />
        <Route path="profile-badge" element={<ProfileBadgeScreen />} />
        <Route path="profile-event" element={<ProfileEventScreen />} />
        <Route path="notification" element={<NotificationScreen />} />
        <Route path="profile-video" element={<ProfileVideoScreen />} />
        <Route path="friends" element={<FriendListScreen />} />
        <Route path="friendprofile" element={<FriendProfileScreen />} />
        <Route path="group" element={<GroupScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
