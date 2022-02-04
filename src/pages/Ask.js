import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CommonCard = () => {
  const dummyText =
    "Migrate G Suite account to a Personal Google Account (2017)";
  const test = dummyText.substring(0, 50);
  return (
    <div className="hk-card">
      <div className="hk-card__inner">
        <div className="hk-card__top">
          {true === true ? (
            <div className="hk-card__top__tag tag--ask">ask</div>
          ) : (
            <div className="hk-card__top__tag tag--tell">tell</div>
          )}
          <h1>{test}</h1>
          <article className="hk-card__top__article">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
            venenatis at blandi...
          </article>
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

const Ask = () => {
  return (
    <div className="hk-ask">
      <CommonCard />
      <CommonCard />
    </div>
  );
};

export default Ask;
