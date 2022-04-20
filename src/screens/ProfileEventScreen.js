import React from "react";
import Layout from "../componenets/Layout";
import EventCard from "../reusable/EventCard";
import PageHeader from "../reusable/PageHeader";

import "../styles/profileEventStyle.css";

function ProfileEventScreen() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default ProfileEventScreen;
