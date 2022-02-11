import { useEffect, useState } from "react";
import { getComment } from "../../util/api";
import Reply from "./Reply";

const Comments = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const { text, title, kids, by, id, time } = comment;

  // Feat: 재귀함수를 이용한 대댓글 기능
  const nestedComments =
    kids.length > 0
      ? comment.kids.map((comment) => {
          return (
            <Comments
              key={comment.id}
              commentId={comment}
              style={{ padding: "10px 0 10px 10px" }}
            />
          );
        })
      : null;

  useEffect(() => {
    getComment(commentId).then((data) => {
      if (data && data.text) {
        setComment(data);
        console.log(data, "댓글 데이터");
      }
    });
  }, [commentId]);

  // 댓글 접기
  const handleCommentCollapse = (id) => {
    const updatedComments = comment.kids.map((kid) => {
      if (kid === id) {
        return {
          ...kid,
          expanded: !kid.expanded,
        };
      } else return kid;
    });
    setComment(updatedComments);
  };

  return Comments && commentId ? (
    <article className="hk-comment">
      <div
        className="hk-comment__inner"
        onClick={() => handleCommentCollapse(id)}
      >
        <div className="hk-comment__item">
          <div className="hk-comment__info">
            <div style={{ cursor: "pointer" }}>
              {" "}
              {comment.expanded ? `[-]` : `[+]`}
            </div>
            <span className="hk-comment__info__writer">{by}</span>
            <span className="hk-comment__info__time"></span>
          </div>
          <div
            // style={{ background: "red" }}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
        {nestedComments}
      </div>

      <i className="icon-comment__replay"></i>
    </article>
  ) : null;
};

export default Comments;
