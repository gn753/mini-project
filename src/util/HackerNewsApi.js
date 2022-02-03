import axios from "axios";
import { HACKER_API_URL } from "./constan";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${HACKER_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error While getting a story");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${HACKER_API_URL}.{type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error While getting a story");
  }
};
