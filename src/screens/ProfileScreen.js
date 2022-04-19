import React from "react";
import Layout from "../componenets/Layout";
import Tab from "../componenets/Tab";
import UserBanner from "../reusable/UserBanner";
import "../styles/ProfileScreenStyle.css";
function ProfileScreen() {
  return (
    <Layout>
      <div className="content-profile">
        <UserBanner />
        <Tab />
      </div>
    </Layout>
  );
}

export default ProfileScreen;
