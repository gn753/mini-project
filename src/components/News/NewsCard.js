import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStory } from "../../util/api";

const NewsCard = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { title, url, by, time, score, descendants, id } = story;
  const navigate = useNavigate();
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
  return NewsCard && url ? (
    <div className="hk-card">
      <div className="hk-card__inner">
        <a className="hk-card__top" href={url} target="_blank">
          <span className="hk-card__top__site">{url.slice(0, 5)}</span>
          <h1>{title}</h1>
        </a>
        <div className="hk-card__bottom">
          <div className="hk-card__info__left">
            <span>{by}</span>
            <span>| {dateKST}</span>
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

export default NewsCard;
