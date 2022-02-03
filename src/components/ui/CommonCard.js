export const HkCardTop = () => {
  return (
    <div className="hk-card__top">
      <span className="hk-card__top__site">39digits.com</span>
      <h1>Migrate G Suite account to a Personal Google Account (2017)</h1>
      <div></div>
    </div>
  );
};

export const HkCardBottom = () => {
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

export const HkCommentSection = () => {
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

export const HkAskOpenCard = () => {
  return (
    <section className="hk-ask-opencard">
      <div className="hk-card__top">
        <span className="hk-card__top__site">39digits.com</span>
        <h1>Requiem for Our “Dash Board Lights”</h1>
      </div>
      <div className="hk-ask-main">
        <p className="hk-ask-main__text">
          I'm not talking about stuff like launching a company that could take
          years to take off. I tried bounty hunting for a while, but it seems
          that a lot of companies don't care that much or are dishonest when it
          comes to paying you, I found weaknesses that could be used to siphon
          tens of thousands of dollars and didn't get a single $ when reporting
          them through their bounty hunting program(even though they fixed it a
          few months after my multiple reports). Do you have any ideas of ways
          to make money with code besides getting a job? I'm okay with gray area
          stuff, as long as it's not straight up hacking. Btw I'm pretty good at
          automation/making bots if you have any ideas in that area. Thanks guys
          :)
        </p>
      </div>
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
              <span>123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
