import React from "react";
import FriendCard from "../reusable/FriendCard";
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
        <div className="friendlist__header--title">Friend List Screen</div>
      </div>
      <div className="friendlist-cards">
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </div>
    </div>
  );
}

export default FriendListScreen;
