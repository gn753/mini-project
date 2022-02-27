import "../../scss/style-guide.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStory } from "../../util/api";

const AskCard = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { title, kids, id, text, by, time, score, descendants, url } = story;
  const navigate = useNavigate();

  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data && data?.title) {
        setStory(data);
      }
    });
  }, []);
  return AskCard && title ? (
    <div className="hk-card">
      <div className="hk-card__inner">
        <div className="hk-card__top" onClick={() => navigate(`/item/${id}`)}>
          {title.slice(0, 3) === "Ask" ? (
            <div className="hk-card__top__tag tag--ask">ask</div>
          ) : (
            <div className="hk-card__top__tag tag--tell">tell</div>
          )}
          <h1>{title}</h1>
          <article
            className="hk-card__top__article"
            dangerouslySetInnerHTML={{ __html: text }}
          ></article>
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
              <span onClick={() => navigate(`/comments/${id}`)}>
                {descendants}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default AskCard;
