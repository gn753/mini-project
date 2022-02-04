const JobCardTop = () => {
  const companyNameDummy = "Muse(YG S21)";

  return (
    <div className="hk-card__top">
      <span className="hk-card__top__site">39digits.com</span>
      <h1>end engineering roles </h1>
      <div className="hk-card__top__job-area">
        <span className="job-area__company-name">{companyNameDummy}</span>
        <span className="job-area__date">1 hours ago</span>
      </div>
    </div>
  );
};

const Jobs = () => {
  return (
    <div className="hk-jobs">
      <JobCardTop />
      <JobCardTop />
      <JobCardTop />
      <JobCardTop />
      <JobCardTop />
      <JobCardTop />
      <JobCardTop />
    </div>
  );
};

export default Jobs;
