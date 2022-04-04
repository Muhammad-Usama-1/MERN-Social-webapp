import { useMediaQuery } from "@mui/material";
import React from "react";
import Post from "../componenets/Post";
import VerticalContent from "../componenets/VerticalContent";
// import data from ".assets/posts.json";
import data from "../assets/posts.json";

function FeedScreen() {
  // const matches1500 = useMediaQuery("(min-width:1500px)");
  // const matches1300 = useMediaQuery("(min-width:1300px)");
  const matches990 = useMediaQuery("(min-width:990px)");
  const matches680 = useMediaQuery("(min-width:680px)");

  return (
    <div
      className={`content ${!matches990 ? "content-990" : null}
  ${!matches680 ? "content-680" : null}
  `}
    >
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
      {/* <Fuck /> */}
      {matches990 && <VerticalContent />}
    </div>
  );
}

export default FeedScreen;
