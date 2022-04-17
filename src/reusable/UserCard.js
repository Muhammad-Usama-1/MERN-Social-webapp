import React from "react";
import userPhoto from "../assets/user.jpg";
function UserCard({
  toComment,
  createdAt,
  title = "Anna Sthesia",
  subTitle = "Just Now",
  cta,
  image,
}) {
  return (
    <div className="usercard--container">
      <img className="usercard-photo" src={image ? image : userPhoto} alt="" />
      <div className="usercard-info">
        <div style={{ display: "flex" }}>
          <p>
            <span
              style={{
                fontWeight: "400",

                // color: "#77d74",
                color: "black",
                fontFamily: "Poppins ,sans-serif",
                marginRight: "5px",
              }}
            >
              {title}
            </span>
            {cta && cta}
          </p>
        </div>
        {subTitle && (
          <p
            style={{
              fontWeight: 100,
              fontFamily: "Montserrat",
              color: `${cta ? "blue" : "#777d74"}`,
            }}
          >
            {subTitle}
          </p>
        )}
        {createdAt && (
          <div className="user-comment" style={{ display: "flex" }}>
            <span>Like </span>
            <span>Reply </span>
            <span>Translate </span>
            <span>{createdAt} </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserCard;
