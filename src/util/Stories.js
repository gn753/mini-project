import React, { useEffect, useState } from "react";
import { getStories, getStory } from "./api";

export const Stories = () => {
  const topIdUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((topIdUrl) => setStoryIds(topIdUrl));
  }, []);

  return storyIds
    .slice(0, 200)
    .map((storyId, i) => <Story key={i} storyId={storyId}></Story>);
};
