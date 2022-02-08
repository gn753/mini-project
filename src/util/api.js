import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const askStoriesUrl = `${baseUrl}/askstories.json`;
export const showStoriesUrl = `${baseUrl}/showstories.json`;
export const jobStoriesUrl = `${baseUrl}/jobstories.json`;

export const itemUrl = `${baseUrl}/item/`;

export const getStories = async (StoriesUrl) => {
  try {
    const res = await axios.get(StoriesUrl).then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getStory = async (storyId) => {
  try {
    const res = await axios
      .get(`${itemUrl + storyId}.json?print=pretty`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getComment = async (commentId) => {
  try {
    const res = await axios
      .get(`${itemUrl + commentId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

//NewStoris
