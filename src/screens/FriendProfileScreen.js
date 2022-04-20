import React from "react";

import data from "../assets/posts.json";
import FriendsPhotoCard from "../reusable/FriendsPhotoCard";
import Layout from "../componenets/Layout";
import PhotosCard from "../reusable/PhotosCard";
import Post from "../componenets/Post";
import UserAbout from "../reusable/UserAbout";
import UserBanner from "../reusable/UserBanner";

import "../styles/FriendProfileStyle.css";

function FriendProfileScreen() {
  return (
    <Layout>
      <div className="content-friendprofile">
        <UserBanner />
        <div className="timeline-box">
          <div>
            <UserAbout />
            <PhotosCard />
            <FriendsPhotoCard />
          </div>
          <div>
            <div className="posts">
              {data.map((post, i) => (
                <Post
                  key={i}
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
    </Layout>
  );
}

export default FriendProfileScreen;
