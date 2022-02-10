import { Link } from "react-router-dom";
export const CardTop = () => {
  return (
    <div className="hk-card__top">
      <span className="hk-card__top__site">39digits.com</span>
      <h1>Migrate G Suite account to a Personal Google Account (2017)</h1>
      <div></div>
    </div>
  );
};

export const CardBottom = () => {
  return (
    <div className="hk-card__bottom">
      <div className="hk-card__info__left">
        <span>lando2319 </span>
        <span>| 1 month ago</span>
      </div>
      <div className="hk-card__info__right">
        <div className="hk-card__info__right__point">
          <i></i>
          <span>123</span>
        </div>
        <div className="hk-card__info__right__comment">
          <i></i>
          <span>123</span>
        </div>
      </div>
    </div>
  );
};

export const CommentSection = () => {
  return (
    <section className="hk-comment-section">
      <div className="hk-comment-item">
        <div className="hk-comment">
          <div className="hk-comment__info">
            <span className="hk-comment__info__writer">writer</span>
            <span className="hk-comment__info__time">1 hour ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Metus venenatis at blandit semper sit
            lacus justo, gravida amet. Nam amet, morbi urna dui, aliquet tortor
            urna.
          </p>
        </div>
        <div className="hk-reply">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
            venenatis at blandit semper sit lacus justo, gravida amet. Nam amet,
            morbi urna dui, aliquet tortor urna.
          </p>
        </div>
      </div>
      <i className="icon-comment__replay"></i>
    </section>
  );
};

const CommonCard = () => {
  return (
    <div className="hk-card">
      <div className="hk-card__inner">
        <div className="hk-card__top">
          <span className="hk-card__top__site">39digits.com</span>
          <h1>Migrate G Suite account to a Personal Google Account (2017)</h1>
        </div>
        <div className="hk-card__bottom">
          <div className="hk-card__info__left">
            <span>lando2319 </span>
            <span>| 1 month ago</span>
          </div>
          <div className="hk-card__info__right">
            <div className="hk-card__info__right__point">
              <i></i>
              <span>123</span>
            </div>
            <div className="hk-card__info__right__comment">
              <i></i>
              <span>
                <Link to="/comments">123</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
