import React from "react";
import UserCard from "../reusable/UserCard";

function Event() {
  return (
    <div className="event-card">
      <h3>Events</h3>
      <hr />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default Event;
