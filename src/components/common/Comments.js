import React, { useEffect, useState } from "react";
import { getComment } from "../../util/api";
import "../../scss/style-guide.scss";

const Comments = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { text, by } = comment;

  const nastedComments =
    comment.kids &&
    comment.kids.map((comment) => {
      return <Comments key={comment} commentId={comment}></Comments>;
    });
  useEffect(() => {
    getComment(commentId).then(
      (data) => {
        if (data && data.text) {
          setComment(data);
          setIsLoaded(true);
        }
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
  }, [commentId]);
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <article className="hk-comment">
        <div className="hk-comment__inner">
          <div className="hk-comment__item">
            <div className="hk-comment__info">
              <div style={{ cursor: "pointer" }}></div>
              <span className="hk-comment__info__writer">{by}</span>
              <span className="hk-comment__info__time"></span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        </div>
        <div style={{ paddingLeft: "20px", paddingTop: "25px" }}>
          {nastedComments}
        </div>
        <i className="icon-comment__replay"></i>
      </article>
    );
  }
};

export default Comments;
