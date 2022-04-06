import React from "react";
import "../styles/friendListStyle.css";
function FriendListScreen() {
  return (
    <div className="content-friendlist">
      <div className="friendlist--header">
        <img
          className="friendlist__header--image"
          src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/profile-bg3.ac4a1ef7.jpg"
          alt=""
        />
      </div>
      <div className="friendlist__header--title">Friend List Screen</div>
      <div className="friendlist-cards">
        <div className="friendlist-card">
          <img src="" alt="" />
        </div>
        <div className="friendlist-card">card2</div>
      </div>
    </div>
  );
}

export default FriendListScreen;
