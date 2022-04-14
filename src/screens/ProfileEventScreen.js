import React from "react";
import EventCard from "../reusable/EventCard";
import PageHeader from "../reusable/PageHeader";

import "../styles/profileEventStyle.css";

function ProfileEventScreen() {
  return (
    <div className="content-media">
      <PageHeader title={"Your Events"} />
      <div className="events-cards">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default ProfileEventScreen;
