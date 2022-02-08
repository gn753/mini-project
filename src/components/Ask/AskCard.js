import "../../scss/style-guide.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStory } from "../../util/api";

const AskCard = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { title, kids, id, text, by, time, score, descendants } = story;
  const [test, setTest] = useState(true);
  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data) {
        setStory(data);
        console.log(data);
      }
    });
  }, []);
  // console.log(title.includes("Ask"));
  return AskCard ? (
    <div className="hk-card">
      <div className="hk-card__inner">
        <div className="hk-card__top">
          <div className="hk-card__top__tag tag--ask">ask</div>
          {/* <div className="hk-card__top__tag tag--tell">tell</div> */}
          <h1>{title}</h1>
          <article className="hk-card__top__article">{text}</article>
        </div>
        <div className="hk-card__bottom">
          <div className="hk-card__info__left">
            <span>{by} </span>
            <span>{time}</span>
          </div>
          <div className="hk-card__info__right">
            <div className="hk-card__info__right__point">
              <i></i>
              <span>{score}</span>
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

export default AskCard;
