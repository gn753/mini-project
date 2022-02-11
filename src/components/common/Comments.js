import { useEffect, useState } from "react";
import { getComment } from "../../util/api";

const Comments = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const { text, title, by, id, kids } = comment;
  const nestedComments = (comment.kids || []).map((comment) => {
    return (
      <Comments
        style={{ backgroundColor: "red" }}
        key={comment}
        commentId={comment}
      />
    );
  });

  useEffect(() => {
    getComment(commentId).then((data) => {
      if (data && data.text) {
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
              {comment.expanded ? `[-]` : `[+]`}
            </div>
            <span className="hk-comment__info__writer">{by}</span>
            <span className="hk-comment__info__time"></span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
        {nestedComments}
      </div>
      <i className="icon-comment__replay"></i>
    </article>
  ) : null;
};

export default Comments;
