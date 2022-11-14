import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideosFetch = (videos) => {
    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  return (
    <div className="ui container ">
      <SearchBar onVideosFetch={onVideosFetch} />
      <div className="ui grid">
        <div className="ten wide column">
          <VideoDetail selectedVideo={selectedVideo} />
        </div>
        <div className="six wide column">
          <VideoList setSelectedVideo={setSelectedVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;
