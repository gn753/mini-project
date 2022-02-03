import { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/Header.scss";

const ToggleNav = ({ pageName }) => {
  return (
    <div className="ToggleNav">
      <ul className="ToggleNav__list">
        <li className="ToggleNav__list__item active">
          <Link to="/" onClick={(e) => pageName(e.target.innerHTML)}>
            hacker news
          </Link>
        </li>
        <li className="ToggleNav__list__item">
          <Link to="/Hkshow" onClick={(e) => pageName(e.target.innerHTML)}>
            show
          </Link>
        </li>
        <li className="ToggleNav__list__item">
          <Link to="/Hkask" onClick={(e) => pageName(e.target.innerHTML)}>
            ask
          </Link>
        </li>
        <li className="ToggleNav__list__item">
          <Link to="/Hkjobs" onClick={(e) => pageName(e.target.innerHTML)}>
            jobs
          </Link>
        </li>
        <li className="ToggleNav__list__item">
          <Link to="/Hkabout" onClick={(e) => pageName(e.target.innerHTML)}>
            about
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [pageTitle, setPageTitle] = useState("hacker news");
  return (
    <header className="hk-header">
      <div className="hk-header__title">
        <h3>
          <i className="hk-logo"></i>
          {pageTitle}
        </h3>
        <i className="hk-plus" onClick={() => setToggle(!toggle)}></i>
      </div>
      {toggle === true ? <ToggleNav pageName={setPageTitle}></ToggleNav> : ""}
    </header>
  );
};

export default Header;
