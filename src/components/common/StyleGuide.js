import { AskOpenCard, CommentSection, CardTop } from "../ui/CommonCard";
import CommonCard from "../ui/CommonCard";
import "./../../scss/style-guide.scss";

const StyleGuide = () => {
  return (
    <div className="style-guide">
      <h1 className="style-guide__title">Style-Guide</h1>
      <div className="HkCardTop sample">
        <h2>Card Top</h2>
        <CardTop></CardTop>
      </div>
      <div className="CommonCard sample">
        <h2>CommonCard</h2>
        <CommonCard />
      </div>
      <div className="Show sample">
        <h2>show</h2>
      </div>
      <div className="Ask-opencard-comments sample">
        <h2>Ask-opencard-comments</h2>
        <CommentSection />
      </div>
      <div className="Ask-opencard-info sample">
        <h2>Ask-opencard-info</h2>
        <AskOpenCard />
      </div>
    </div>
  );
};

export default StyleGuide;
