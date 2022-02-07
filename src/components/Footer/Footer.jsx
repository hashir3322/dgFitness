import React, { useState } from "react";
import FooterLogo from "../../images/Footer/flogo.svg";
import Facebook from "../../images/Footer/facebbook.svg";
import Instagram from "../../images/Footer/instagram.svg";
import Whatsapp from "../../images/Footer/whatsapp.svg";
import Send from "../../images/Footer/Send.png";
import Mail from "../../images/Footer/Mail.png";
import Phone from "../../images/Footer/Phone.png";
import World from "../../images/Footer/World.png";
import { Link as LinkScroll } from "react-scroll";
import "./Footer.css";
import { Link } from "gatsby";
import * as emailjs from "emailjs-com";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openInNewTab = (url) => {
    console.log(url);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h4>Contact Us</h4>
          <form onSubmit={sendEmail}>
            <div className="inputField">
              <input
                className="input__box"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input__box"
                type="email"
                name=""
                id=""
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              name=""
              id=""
              className="input__box"
              placeholder="Leave your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer__middle">
          <img src={FooterLogo} alt="Footer Logo" />
          <ul>
            <li>
              <LinkScroll
                className="link"
                to="home"
                duration={500}
                smooth={true}
              >
                About Us
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                className="link"
                to="home"
                duration={500}
                smooth={true}
              >
                Inspiration
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                className="link"
                to="home"
                duration={500}
                smooth={true}
              >
                Education
              </LinkScroll>
            </li>
          </ul>
          <div className="social__icons">
            <img
              src={Facebook}
              alt="Facebook"
              onClick={() =>
                openInNewTab("https://www.facebook.com/dgfitnessandlifestyle/")
              }
            />
            <img
              src={Instagram}
              alt="Instagram"
              onClick={() =>
                openInNewTab(
                  "https://www.instagram.com/dg_fitnessandlifestyle/"
                )
              }
            />
            <img
              src={Whatsapp}
              alt="Whatsapp"
              onClick={() =>
                openInNewTab(
                  "https://api.whatsapp.com/send/?phone=971569677986&text&app_absent=0"
                )
              }
            />
          </div>
        </div>
        <div className="footer__right">
          <h4>Corporate Office</h4>
          <div className="footer__address">
            <div className="address">
              <img src={Send} alt="Send" />
              <span className="addr">44 New Design Street, rne 005</span>
            </div>
            <div className="address">
              <img src={Phone} alt="Phone" />
              <span className="addr">+971 56 967 7986</span>
            </div>
            <div className="address">
              <img src={Mail} alt="Mail" />
              <a className="addr" href="mailto:denis@dgfitness.guru">
                denis@dgfitness.guru
              </a>
            </div>
            <div className="address">
              <img src={World} alt="World" />
              <span className="addr">dgfitnessandlifestyle.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="policy">
          <Link className="link" to="/">
            Terms and Conditions
          </Link>
          <span>|</span>
          <Link className="link" to="/">
            Privacy Policy
          </Link>
        </div>
        <p>© 2021 Denis Golosin All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
