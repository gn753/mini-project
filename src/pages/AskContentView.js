import { useState, useEffect } from "react";
import { getStories, askStoriesUrl, getStory } from "../util/api";
import { useParams, useNavigate } from "react-router-dom";
const AskContentView = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { id } = useParams();
  const [dataId, setDataId] = useState();
  const navigate = useNavigate();
  const [story, setStory] = useState({});
  useEffect(() => {
    getStories(askStoriesUrl).then((ids) => setStoryIds(ids));
  }, []);
  useEffect(() => {
    if (storyIds.length >= 1) {
      const targetStoryId = storyIds.find(
        (it) => parseInt(it) === parseInt(id)
      );

      if (targetStoryId) {
        setDataId(targetStoryId);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, storyIds]);
  useEffect(() => {}, []);
  return (
    <section className="hk-ask-opencard">
      <div className="hk-card__top">
        <span className="hk-card__top__site">39digits.com</span>
        <h1>Requiem for Our “Dash Board Lights”</h1>
      </div>
      <div className="hk-ask-main">
        <p className="hk-ask-main__text">
          I'm not talking about stuff like launching a company that could take
          years to take off. I tried bounty hunting for a while, but it seems
          that a lot of companies don't care that much or are dishonest when it
          comes to paying you, I found weaknesses that could be used to siphon
          tens of thousands of dollars and didn't get a single $ when reporting
          them through their bounty hunting program(even though they fixed it a
          few months after my multiple reports). Do you have any ideas of ways
          to make money with code besides getting a job? I'm okay with gray area
          stuff, as long as it's not straight up hacking. Btw I'm pretty good at
          automation/making bots if you have any ideas in that area. Thanks guys
          :)
        </p>
      </div>
    </section>
  );
};

export default AskContentView;
