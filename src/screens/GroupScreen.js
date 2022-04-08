import React from "react";
import GroupCard from "../reusable/GroupCard";
import PageHeader from "../reusable/PageHeader";
import "../styles/GroupScreenStyle.css";
function GroupScreen() {
  return (
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
  );
}

export default GroupScreen;
