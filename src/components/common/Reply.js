import { useEffect, useState } from "react";
import { getReply } from "../../util/api";

const Reply = ({ parentId, replyId, props }) => {
  const [reply, setReply] = useState({});
  const { text, by, kids } = reply;
  useEffect(() => {
    getReply(replyId).then((data) => {
      if (data.parent && parentId) {
        setReply(data);
        console.log(data, "대댓글 데이터");
      }
    });
  }, [replyId]);
  return Reply && text ? (
    <div className="hk-reply">
      <p>{by}</p>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <div className="hk-rereply">
        {props && kids !== null ? `${props} + 대대댓글` : null}
      </div>
    </div>
  ) : null;
};

export default Reply;
