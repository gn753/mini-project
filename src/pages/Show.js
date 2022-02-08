import { useEffect, useState } from "react";
import ShowCard from "../components/Show/ShowCard";
import { getStories, showStoriesUrl } from "../util/api";
import FooterBar from "../components/common/FooterBar";

const Show = () => {
  const [storyIds, setStoryIds] = useState([]); //원본
  const [maxItem, setMaxItem] = useState(10);
  useEffect(() => {
    getStories(showStoriesUrl).then((ids) => setStoryIds(ids));
  }, [storyIds]);
  return (
    <div className="HkShow " id="columns">
      <div className="hk-show__list">
        {storyIds.slice(0, maxItem).map((storyId) => (
          <ShowCard key={storyId} storyId={storyId} />
        ))}
      </div>
      <FooterBar maxItemNumber={setMaxItem} maxItem={maxItem} />
    </div>
  );
};

export default Show;
