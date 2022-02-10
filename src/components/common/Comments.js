import { useEffect, useState } from "react";
import { getComment } from "../../util/api";
import Reply from "./Reply";

const Comments = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const { text, title, kids, by } = comment;
  useEffect(() => {
    getComment(commentId).then((data) => {
      if (data && data.text) {
        setComment(data);
        console.log(data, "댓글 데이터");
      }
    });
  }, [commentId]);

  return Comments && commentId ? (
    <article className="hk-comment">
      <div className="hk-comment__inner">
        <div className="hk-comment__item">
          <div className="hk-comment__info">
            <span className="hk-comment__info__writer">{by}</span>
            <span className="hk-comment__info__time"></span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
      {kids && kids.length > 0
        ? kids.map((it) => (
            <Reply
              key={it}
              parentId={commentId}
              replyId={it}
              props={<Reply />}
            />
          ))
        : null}
      <i className="icon-comment__replay"></i>
    </article>
  ) : null;
};

export default Comments;
