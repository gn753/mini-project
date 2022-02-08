import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/Header.scss";

const ToggleBtn = () => {
  return (
    <div className="Toggle-btn">
      <div className="Toggle-btn__bar"><div className="Toggle-gage"></div></div>
    </div>
  );
};

const ToggleNav = ({ pageName, pageTitle }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="ToggleNav">
      <ul className="ToggleNav__list">
        <li
          className={
            pageTitle === `hacker news`
              ? "ToggleNav__list__item active"
              : "ToggleNav__list__item"
          }
        >
          <Link to="/" onClick={(e) => pageName(e.target.innerHTML)}>
            hacker news
          </Link>
        </li>
        <li
          className={
            pageTitle === `show`
              ? "ToggleNav__list__item active"
              : "ToggleNav__list__item"
          }
        >
          <Link to="/show" onClick={(e) => pageName(e.target.innerHTML)}>
            show
          </Link>
        </li>
        <li className="ToggleNav__list__item">
          <Link to="/ask" onClick={(e) => pageName(e.target.innerHTML)}>
            ask
          </Link>
        </li>
        <li className="ToggleNav__list__item">
          <Link to="/jobs" onClick={(e) => pageName(e.target.innerHTML)}>
            jobs
          </Link>
        </li>
        <li className="ToggleNav__list__item">
          <Link to="/about" onClick={(e) => pageName(e.target.innerHTML)}>
            about
          </Link>
        </li>
      </ul>
      <ToggleBtn />
    </div>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [pageTitle, setPageTitle] = useState("hacker news");

  useEffect(() => {
    setToggle(!toggle);
  }, [pageTitle]);
  return (
    <header className="hk-header">
      <div className="hk-header__title">
        <h3>
          <i className="hk-logo"></i>
          {pageTitle}
        </h3>
        <i
          className={
            toggle === true
              ? [`hk-plus`]
              : [`hk-plus`, ` hk-plus--active`].join(" ")
          }
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
      {toggle === true ? (
        <ToggleNav pageName={setPageTitle} pageTitle={pageTitle}></ToggleNav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
