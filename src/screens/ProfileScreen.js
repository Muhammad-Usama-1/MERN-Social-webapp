import React from "react";
import Tab from "../componenets/Tab";
import UserBanner from "../reusable/UserBanner";
import "../styles/ProfileScreenStyle.css";
function ProfileScreen() {
  return (
    <div className="content-profile">
      <UserBanner />
      <Tab />
    </div>
  );
}

export default ProfileScreen;
