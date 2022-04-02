import React from "react";
import userPhoto from "../assets/user.jpg";
function UserCard({ title = " Anna Sthesia", subTitle = "Just Now", cta }) {
  return (
    <div className="usercard--container">
      <img className="usercard-photo" src={userPhoto} alt="" />
      <div className="usercard-info">
        <div style={{ display: "flex" }}>
          <p>
            <span style={{ fontWeight: "500", marginRight: "5px" }}>
              {title}
            </span>
            {cta && cta}
          </p>
        </div>
        {subTitle && (
          <p style={{ fontWeight: 100, color: `${cta ? "blue" : "#000"}` }}>
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserCard;
