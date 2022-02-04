import "./../scss/News.scss";
import { useState, useEffect } from "react";
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
  const [isTabNav, setIsTabNav] = useState(); //top/new 탭 state
  return (
    <div>
      <TabNav tabChange={setIsTabNav} />
      <ItemList isTabNav={isTabNav}></ItemList>
    </div>
  );
};

export default News;
