import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStory } from "../../util/api";

const ShowCard = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { title, kids, id, url, by, time, score, descendants } = story;
  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data && data?.url) {
        setStory(data);
      }
    });
  }, []);
  //UNIX TIME => 일반 시간
  let unixTime = time;
  let date = new Date(unixTime * 1000);
  let dateKST = date.toLocaleDateString("KST");


  return ShowCard && url ? (
    <div className="hk-card">
      <div className="hk-card__inner">
        <div className={score < 40 ? "hk-card__top" :  "hk-card__top card--active"}>
          <span className="hk-card__top__site">{url.slice(0, 5)}</span>
          <h1>{title}</h1>
        </div>
        <div className="hk-card__bottom">
          <div className="hk-card__info__left">
            <span>{by}</span>
            <span>{dateKST}</span>
          </div>
          <div className="hk-card__info__right">
            <div className="hk-card__info__right__point">
              <i></i>
              <span className="">{score}</span>
            </div>
            <div className="hk-card__info__right__comment">
              <i></i>
              <span>
                <Link to="/comments">{descendants}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ShowCard;
