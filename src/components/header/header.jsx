import React, { useRef } from "react";
import "./header.css";
import { navigate } from "gatsby";
import Logo from "../../images/Header/logo.png";
import Facebook from "../../images/Header/facebook.svg";
import Instagram from "../../images/Header/instagram.svg";
import Whatsapp from "../../images/Header/whatsapp.svg";

const Header = () => {
  let isVisible = false;
  let show = useRef(null);
  function handleNav() {
    if (isVisible === false) {
      if (show.current !== null) {
        show.current.style.left = "0%";
        isVisible = true;
      }
    } else if (isVisible === true) {
      if (show.current !== null) {
        show.current.style.left = "-105%";
        isVisible = false;
      }
    }
  }
  function closeNav() {
    if (isVisible === true) {
      if (show.current !== null) {
        show.current.style.left = "-105%";
        isVisible = false;
      }
    }
  }

  const openInNewTab = (url) => {
    console.log(url);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="navbar__logo__container">
          <img
            src={Logo}
            alt="brand_logo"
            className="navbar__logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="navbar__main__nav" ref={show}>
          <ul className="main__nav__buttons">
            <li className="main__nav__button--language" onClick={closeNav}>
              {" "}
              <span> EN </span> / <span className="other__language"> ع </span>{" "}
            </li>
            <li className="main__nav__button" onClick={closeNav}>
              <button className="primary__btn header--btn">sign in</button>
            </li>
            <li className="main__nav__button" onClick={closeNav}>
              <button className="secondary__btn">sign up</button>
            </li>
          </ul>
          <ul className="navbar__social__buttons">
            <li className="navbar__social__btn" onClick={closeNav}>
              <img
                src={Facebook}
                alt="facebook"
                onClick={() =>
                  openInNewTab(
                    "https://www.facebook.com/dgfitnessandlifestyle/"
                  )
                }
              />
            </li>
            <li className="navbar__social__btn" onClick={closeNav}>
              <img
                src={Instagram}
                alt="instagram"
                onClick={() =>
                  openInNewTab(
                    "https://www.instagram.com/dg_fitnessandlifestyle/"
                  )
                }
              />
            </li>
            <li
              className="navbar__social__btn whatsapp--btn"
              onClick={closeNav}
            >
              <img
                src={Whatsapp}
                alt="whatsapp"
                onClick={() =>
                  openInNewTab(
                    "https://api.whatsapp.com/send/?phone=971569677986&text&app_absent=0"
                  )
                }
              />
            </li>
          </ul>
        </div>
        <div className="burger__menu" onClick={handleNav}>
          <span className="burger__menu__bar"></span>
          <span className="burger__menu__bar"></span>
          <span className="burger__menu__bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
