const AskOpenCard = ({ story }) => {
  const { title, text, score, by, time } = story;
  return (
    <article>
      <div className="hk-card__top">
        {title.slice(0, 3) === "Ask" ? (
          <div className="hk-card__top__tag tag--ask">ask</div>
        ) : (
          <div className="hk-card__top__tag tag--tell">tell</div>
        )}
        <h1>{title}</h1>
        <div className="hk-card__top__etc-info">
          <div className="writer">
            <span>{by} </span>
            <span>| {time}</span>
          </div>
          <div className="point">{score}</div>
        </div>
        <div
          className="hk-ask-main"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </article>
  );
};

export default AskOpenCard