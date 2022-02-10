import { useState, useEffect, useContext } from "react";
import { StorisContext } from "../App";
import { getStory } from "../util/api";
import { useParams, useNavigate } from "react-router-dom";

import AskOpenCard from "../components/Ask/AskOpenCard";
import Comments from "../components/common/Comments";
const AskContentView = () => {
  const StorisIds = useContext(StorisContext);
  const { urlId } = useParams();
  const [dataId, setDataId] = useState();
  const [story, setStory] = useState({});
  const navigate = useNavigate();
  const { kids, title } = story;
  console.log(story);
  useEffect(() => {
    if (StorisIds.length >= 1) {
      const targetStoryId = StorisIds.find(
        (it) => parseInt(it) === parseInt(urlId)
      );
      if (targetStoryId) {
        setDataId(targetStoryId);
      } else {
        alert("없는 글입니다.");
        navigate("/ask", { replace: true });
      }
    }
  }, [dataId]);
  useEffect(() => {
    getStory(dataId).then((data) => {
      if (data && data.id) {
        setStory(data);
        // console.log(data, "아이템 데이터");
      }
    });
    console.log(typeof text, "text");
  }, [dataId]);

  return (
    <div>
      {<AskOpenCard /> && story.title ? (
        <article className="hk-ask-opencard">
          <AskOpenCard story={story} />
        </article>
      ) : null}
      {kids && <Comments />
        ? kids
            .slice(0, 10)
            .map((kid, index) => <Comments key={index} commentId={kid} />)
        : null}
    </div>
  );
};

export default AskContentView;
