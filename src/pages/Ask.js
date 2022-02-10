import { useEffect, useState } from "react";
import { getStories, askStoriesUrl } from "../util/api";
import AskCard from "../components/Ask/AskCard";
import FooterBar from "../components/common/FooterBar";

const Ask = () => {
  const [storyIds, setStoryIds] = useState([]); //원본
  const [maxItem, setMaxItem] = useState(10);

  useEffect(() => {
    getStories(askStoriesUrl).then((ids) => setStoryIds(ids));
  }, []);

  return (
    <div className="hk-ask">
      {storyIds.slice(0, maxItem).map((storyId) => (
        <AskCard key={storyId} storyId={storyId} />
      ))}
      <FooterBar maxItemNumber={setMaxItem} maxItem={maxItem} />
    </div>
  );
};

export default Ask;
