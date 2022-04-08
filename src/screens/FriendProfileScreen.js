import React from "react";
import FriendsPhotoCard from "../reusable/FriendsPhotoCard";
import PhotosCard from "../reusable/PhotosCard";
import UserBanner from "../reusable/UserBanner";
import "../styles/FriendProfileStyle.css";
import data from "../assets/posts.json";
import Post from "../componenets/Post";

function FriendProfileScreen() {
  return (
    <div className="content-friendprofile">
      <UserBanner />
      <div className="timeline-box">
        <div>
          <PhotosCard />
          <FriendsPhotoCard />
        </div>
        <div>
          <div className="posts">
            {data.map((post) => (
              <Post
                videoUrl={post.videoUrl}
                comments={post.comments}
                images={post.images}
                user={post.user}
                like={post.like}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendProfileScreen;
