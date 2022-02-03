import { HkCommentSection } from "../components/ui/CommonCard";
import { HkCardTop } from "../components/ui/CommonCard";
import "../scss/HkComments.scss";
const HkComment = () => {
  return (
    <div className="HkComments">
      <HkCardTop/>
      <div>
        <HkCommentSection></HkCommentSection>
        <HkCommentSection></HkCommentSection>
        <HkCommentSection></HkCommentSection>
      </div>
    </div>
  );
};

export default HkComment;
