import React from "react";
import Card from "./Card/Card";
import Card1 from "../../images/Cards/Card1.jpg";
import Card2 from "../../images/Cards/Card2.jpg";
import Card3 from "../../images/Cards/Card3.jpg";
import Icon1 from "../../images/Cards/icon1.png";
import Icon2 from "../../images/Cards/icon2.png";
import Icon3 from "../../images/Cards/icon3.png";
import { DIY } from "./Card/DIY";
import { Online } from "./Card/Online";
import { InPerson } from "./Card/InPerson";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards" id="cards">
      <div className="header__container">
        <h2>
          PROGRAMS to suit your <span>LIFESTYLE</span>
        </h2>
      </div>
      <div className="cards__container">
        <div className="cards__sec">
          <Card img={Card1} cardIcon={Icon1} text="DIY Programs" list={DIY} />
          <Card
            img={Card2}
            cardIcon={Icon2}
            text="Online Training"
            list={Online}
          />
          <Card
            img={Card3}
            cardIcon={Icon3}
            text="In-Person Training"
            list={InPerson}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
