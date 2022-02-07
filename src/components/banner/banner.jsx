import React from "react";
import { Link as LinkScroll } from "react-scroll";
import "./banner.css";
const Banner = () => {
  return (
    <section className="banner" id="banner">
      <h1 className="banner__title">
        Build <span className="banner__title__outlined">Your</span> Body
      </h1>
      <LinkScroll
        className="banner__btn primary__btn"
        to="cards"
        duration={700}
        smooth={true}
      >
        START NOW!
      </LinkScroll>
    </section>
  );
};

export default Banner;
