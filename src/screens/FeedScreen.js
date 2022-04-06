import React from "react";
import { useMediaQuery } from "@mui/material";

import Post from "../componenets/Post";
import VerticalContent from "../componenets/VerticalContent";
import data from "../assets/posts.json";

function FeedScreen() {
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
