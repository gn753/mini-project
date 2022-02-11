import { useEffect, useState } from "react";
import { getComment } from "../../util/api";
import Reply from "./Reply";

const Comments = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const { text, title, kids, by, id, time } = comment;

  const nestedComments = (comment.kids || []).map((comment) => {
    return (
      <Comments
        style={{ padding: "10px 0 10px 10px" }}
        key={comment.id}
        commentId={comment}
      />
    );
  });

  useEffect(() => {
    getComment(commentId).then((data) => {
      if (data && data?.text) {
        setComment(data);
      }
    });
  }, [commentId]);

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
        <div>{nestedComments}</div>
      </div>

      <i className="icon-comment__replay"></i>
    </article>
  ) : null;
};

export default Comments;
