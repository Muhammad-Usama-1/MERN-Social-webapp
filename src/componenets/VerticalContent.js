import React from "react";
import Story from "./Story";
import Event from "./Event";
import UpcomingBirthday from "./UpcomingBirthday";
function VerticalContent() {
  return (
    <div className="vertical-flex">
      <Story />
      <Event />
      <UpcomingBirthday />
      <h1>Sugeestion</h1>
    </div>
  );
}

export default VerticalContent;
