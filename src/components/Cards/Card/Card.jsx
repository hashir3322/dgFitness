import React from "react";
import { Link } from "gatsby";
import "./Card.css";

const Card = ({ img, cardIcon, text, list }) => {
  return (
    <div className="card">
      <div className="cardbox">
        <img src={img} alt="Card1" />
        <div className="cardtext">
          <div className="cardicon">
            <img src={cardIcon} alt="Icon" />
          </div>
          <p>{text}</p>
        </div>
        <div className="card__overlay">
          <h4>For The Train Whenever Lifestyle</h4>
          <ul>
            {list?.map((inst, id) => {
              return <li key={id}>{inst}</li>;
            })}
          </ul>
          <div className="overlay__bottom">
            <h5>AED 380 /month</h5>
            <Link className="link" to="/">
              Learn More...
            </Link>
          </div>
        </div>
      </div>
      <button>Start Now!</button>
    </div>
  );
};

export default Card;
