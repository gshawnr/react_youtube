import React, { useEffect, useState } from "react";
import youtube from "./apis/youtube";

const SearchBar = ({ onVideosFetch }) => {
  const [term, setTerm] = useState("");

  // when component mounts, load initial set of videos
  useEffect(() => {
    (async () => {
      onVideosFetch(await fetchVideos("news"));
    })();
  }, []);

  const onChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const items = await fetchVideos(term);
      onVideosFetch(items);

      setTerm("");
    } catch (err) {
      console.log("error submitting request", err);
    }
  };

  const fetchVideos = async (searchTerm) => {
    const {
      data: { items },
    } = await youtube.get("/search/", { params: { q: searchTerm } });

    return items;
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => onSubmitHandler(e)}>
        <div className="field">
          <label className="">Search</label>
          <input
            onChange={(e) => onChangeHandler(e)}
            value={term}
            type="text"
            placeholder="enter search term"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
