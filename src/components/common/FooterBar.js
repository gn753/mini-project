import "../../scss/FooterBar.scss";
const FooterBar = ({maxItemNumber,maxItem }) => {
  return (
    <div className="FooterBar">
      <div
        className="FooterBar__item"
        role="button"
        onClick={() => maxItemNumber(maxItem + 10)}
      ></div>
    </div>
  );
};
export default FooterBar;
