import React from "react";
import Layout from "../componenets/Layout";
import GroupCard from "../reusable/GroupCard";
import PageHeader from "../reusable/PageHeader";

import "../styles/GroupScreenStyle.css";
function GroupScreen() {
  return (
    <Layout>
      <div className="content-group">
        <PageHeader title="Group Screen" />
        <div className="groups-cards">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
    </Layout>
  );
}

export default GroupScreen;
