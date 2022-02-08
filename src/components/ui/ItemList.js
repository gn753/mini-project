import React, { useEffect, useState, useMemo, useCallback } from "react";
import NewsCard from "../News/NewsCard";

const ItemList = ({ isTabNav, storyIds, maxItem }) => {
  useEffect(() => {
    console.log(isTabNav, "isTabNav");
    console.log(maxItem, "maxItem");
  }, [isTabNav, maxItem]);
  return (
    <div className="ItemList">
      {storyIds
        .slice(0, maxItem)
        .map((storyId) =>
          isTabNav === true ? (
            <NewsCard key={storyId} storyId={storyId} />
          ) : (
            <NewsCard key={storyId} storyId={storyId} />
          )
        )}
    </div>
  );
};
export default React.memo(ItemList);
