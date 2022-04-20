import React from "react";

import FriendCard from "../reusable/FriendCard";
import Layout from "../componenets/Layout";
import PageHeader from "../reusable/PageHeader";

import "../styles/friendListStyle.css";
function FriendListScreen() {
  return (
    <Layout>
      <div className="content-friendlist">
        <PageHeader title="Friend List Screen" />
        <div className="friendlist-cards">
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </Layout>
  );
}

export default FriendListScreen;
