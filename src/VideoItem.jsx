import React from "react";

const VideoItem = ({ video, setSelectedVideo }) => {
  return (
    <div className="ui grid">
      <div className="six wide column">
        <img
          style={{ cursor: "pointer", width: "100%" }}
          onClick={() => setSelectedVideo(video)}
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.description}
        />
      </div>
      <div className="ten wide column">{video.snippet.description}</div>
    </div>
  );
};

export default VideoItem;
