import "./../scss/News.scss";
import React, { useState, useEffect } from "react";
import { getStories, topStoriesUrl, newStoriesUrl } from "../util/api";
import FooterBar from "../components/common/FooterBar";
import ItemList from "../components/ui/ItemList";

const TabNav = ({ tabChange }) => {
  const [isTab, setIsTab] = useState(true);

  useEffect(() => {
    tabChange(isTab);
    console.log("isTab", isTab);
  }, [isTab]);

  return (
    <div className="TabNav">
      <ul className="TabNav__list">
        <li
          onClick={() => setIsTab(true)}
          className={[
            `TabNav__list__item`,
            isTab === true ? "TabNav__list__item--active" : "",
          ]
            .join(" ")
            .trim()}
        >
          top
        </li>
        <li
          onClick={() => setIsTab(false)}
          className={[
            `TabNav__list__item`,
            isTab === false ? "TabNav__list__item--active" : "",
          ]
            .join(" ")
            .trim()}
        >
          new
        </li>
      </ul>
    </div>
  );
};

const News = ({ topIdList }) => {
  const [isTabNav, setIsTabNav] = useState(true); //top/new 탭 state
  const [storyIds, setStoryIds] = useState([]); //원본
  const [maxItem, setMaxItem] = useState(10);

  useEffect(() => {
    if (isTabNav === true) {
      getStories(topStoriesUrl).then((ids) => setStoryIds(ids));
      setMaxItem(() => 10); //tab 전환: 아이템 최대 갯수 시작값으로 초기화
    } else {
      getStories(newStoriesUrl).then((ids) => setStoryIds(ids));
      setMaxItem(() => 10);
    }
  }, [isTabNav]);
  useEffect(() => {}, []);

  return (
    <div className="hk-news">
      <TabNav tabChange={setIsTabNav} />
      <ItemList
        isTabNav={isTabNav}
        storyIds={storyIds}
        maxItem={maxItem}
      ></ItemList>
      <FooterBar maxItemNumber={setMaxItem} maxItem={maxItem} />
    </div>
  );
};

export default News;
