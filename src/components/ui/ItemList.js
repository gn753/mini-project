import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { dummyData } from "../../util/dummyData";

const CommonCard = ({ by, title }) => {
  return (
    <div className="hk-card">
      <div className="hk-card__inner">
        <div className="hk-card__top">
          <span className="hk-card__top__site">39digits.com</span>
          <h1>{title}</h1>
        </div>
        <div className="hk-card__bottom">
          <div className="hk-card__info__left">
            <span>{by}</span>
            <span>| 1 month ago</span>
          </div>
          <div className="hk-card__info__right">
            <div className="hk-card__info__right__point">
              <i></i>
              <span>123</span>
            </div>
            <div className="hk-card__info__right__comment">
              <i></i>
              <span><Link to="/comments">123</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ItemList = ({ isTabNav }) => {
  useEffect(() => {
    console.log(isTabNav);
  }, []);
  return (
    <div className="ItemList">
      {dummyData.map((it, index) => {
        return isTabNav === false ? (
          <div key={index}>{it.id}</div> //토글 잘되는지 테스트용 div
        ) : (
          <CommonCard key={it.id} {...it} />
        );
      })}
    </div>
  );
};
export default ItemList;
