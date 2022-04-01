import React from "react";
import Story from "./Story";
import Event from "./Event";
import UpcomingBirthday from "./UpcomingBirthday";
// import "../styles/contentStyle.css";
function VerticalContent() {
  return (
    <div className="vertical-flex">
      <Story />
      <Event />
      <UpcomingBirthday />
      {/* <h1>Upcoming Birthdays</h1> */}
      <h1>Sugeestion</h1>
    </div>
  );
}

export default VerticalContent;
