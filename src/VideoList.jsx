import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
  return (
    <div>
      {videos.map((vid) => {
        return (
          <VideoItem
            key={vid.id.videoId}
            setSelectedVideo={setSelectedVideo}
            video={vid}
          />
        );
      })}
    </div>
  );
};
export default VideoList;
