import { CommentSection, CardTop } from "../components/ui/CommonCard";
import "../scss/Comments.scss";
const Comment = () => {
  return (
    <div className="HkComments">
      <CardTop />
      <div>
        <CommentSection></CommentSection>
        <CommentSection></CommentSection>
        <CommentSection></CommentSection>
      </div>
    </div>
  );
};

export default Comment;
