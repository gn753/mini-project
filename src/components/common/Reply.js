import { useEffect, useState } from "react";
import { getReply } from "../../util/api";

const Reply = ({ }) => {
  // const [reply, setReply] = useState({});
  // const { text, by, kids } = reply;
  // useEffect(() => {
  //   replyes.map((replyId) =>
  //     getReply(replyId).then((data) => {
  //       if (data.parent && parentId) {
  //         setReply(data);
  //         console.log(data, "대댓글 데이터");
  //       }
  //     })
  //   );
  // }, [replyes]);
  return  (
        <div className="hk-reply">
        </div>
      )
};

export default Reply;
