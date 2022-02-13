import { useEffect, useState } from "react";
import { getComment } from "../../util/api";

const Comments = ({ commentId }) => {
  const [comment, setComment] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { text, title, by, id, kids } = comment;

  const nestedComments = (kids || []).map((comment, index) => {
    console.log(comment);
    return (
      <Comments
        style={{ backgroundColor: "red" }}
        key={comment}
        commentId={comment}
      />
    );
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
    console.log(kids);
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

  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
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
    );
  }
};

export default Comments;
