import { useState, useEffect, useContext } from "react";
import { StorisContext } from "../App";
import { getComment, getStory } from "../util/api";
import { useParams, useNavigate } from "react-router-dom";

import AskOpenCard from "../components/Ask/AskOpenCard";
import Comments from "../components/common/Comments";
// import Reply from "../components/common/Reply";

const AskContentView = () => {
  const StorisIds = useContext(StorisContext);
  const { urlId } = useParams(); //url 주소 매칭
  const [postId, setPostId] = useState(); // 본문글 Id
  const [story, setStory] = useState({}); // 본문 내용데이터
  const navigate = useNavigate();
  const { kids, title } = story;

  useEffect(() => {
    if (StorisIds.length >= 1) {
      const targetStoryId = StorisIds.find(
        (it) => parseInt(it) === parseInt(urlId)
      );
      if (targetStoryId) {
        setPostId(targetStoryId);
      } else {
        alert("없는 글입니다.");
        navigate("/ask", { replace: true });
      }
    }
  }, [postId]);
  useEffect(() => {
    //본문글을 뽑는 API
    getStory(postId).then((data) => {
      if (data && data?.id) {
        setStory(data);
      }
    });
  }, [postId]);

  return (
    <div>
      {<AskOpenCard /> && story.title ? (
        <article className="hk-ask-opencard">
          <AskOpenCard story={story} />
        </article>
      ) : null}
      <div className="comment__container">
        {postId && kids
          ? kids.map((kid) => <Comments key={kid} commentId={kid}></Comments>)
          : null}
      </div>
    </div>
  );
};

export default AskContentView;
