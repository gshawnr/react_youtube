import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  const YOUTUBE_URL = "https://www.youtube.com/embed/";

  const { id = {}, snippet = {} } = selectedVideo || {};
  const { videoId = "" } = id;
  const { title = "", description = "" } = snippet;

  const url = YOUTUBE_URL + videoId;

  return (
    <React.Fragment>
      <iframe width="100%" height="80%" src={url}></iframe>
      <h3>{title}</h3>
      <p>{description}</p>
    </React.Fragment>
  );
};

export default VideoDetail;
