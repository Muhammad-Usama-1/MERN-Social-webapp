import React from "react";
import userPhoto from "../assets/user.jpg";

function UserCard({ title = " Anna Sthesia", subTitle = "Just Now" }) {
  return (
    <div className="usercard--container">
      <img className="usercard-photo" src={userPhoto} alt="" />
      <div className="usercard-info">
        <p> {title} </p>
        {subTitle && <p> {subTitle} </p>}
      </div>
    </div>
  );
}

export default UserCard;
