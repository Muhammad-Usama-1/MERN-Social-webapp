import React from "react";
import "../styles/Video.css";

function EmededVideo({ videoUrl }) {
  // <iframe width="1038" height="584" src="https://www.youtube.com/embed/DN0AdgIq0FA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  return (
    <div className="video-responsive">
      <iframe
        height="300"
        src={`${videoUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default EmededVideo;
