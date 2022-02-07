import React from "react";
import { Link as LinkScroll } from "react-scroll";
import "./arrow.css";
import Chevron from "../../images/Arrow/chevron.png";
const Arrow = () => {
  return (
    <section className="arrow__section">
      <LinkScroll to="video" className="arrow" duration={500} smooth={true}>
        <img src={Chevron} alt="arrow" />
      </LinkScroll>
    </section>
  );
};

export default Arrow;
