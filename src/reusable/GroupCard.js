import React from "react";

function GroupCard() {
  return (
    <div className="group-card">
      <div className="group-card--header">
        <img
          className="group-card--header--image"
          src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/profile-bg1.5e2df945.jpg"
          alt=""
        />
        <div className="group-card-abs-div">
          <img
            className="group-card--header--roundphoto"
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/gi-1.376a5c53.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="group-card--titles">
        <p>Designer</p>
        <p>passionate about softwares</p>
      </div>
      <div className="group-card-details">
        <div>
          <p>Post</p>
          <p>23</p>
        </div>
        <div>
          <p>Members</p>
          <p>600</p>
        </div>
        <div>
          <p>Viist</p>
          <p>1.2k</p>
        </div>
      </div>
      <button className="group-card-btn">Following</button>
    </div>
  );
}

export default GroupCard;
