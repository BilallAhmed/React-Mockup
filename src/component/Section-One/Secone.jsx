import React from "react";
import "../Section-One/Secone.css";
import laptop from "../Section-One/assets/Laptop.png";
import arrow from "../Section-One/assets/arrow.png";
import mail from "../header/Mail-icon.png";
function Secone() {
  return (
    <div>
      <div className="container-fluid my-5 mc-container ">
        <div className="row my-4 mc-main-row">
          <a className="sticky-btn" href="/">
            CONTACT US !
          </a>

          <p className="sticky-scroll">
            SCROLL DOWN
            <hr className="sticky-hr" />
          </p>

          <div className="middle">
            <div className="mouse"></div>
          </div>

          <div className="middle">
            <a href="#about">
              <div className="mouse"></div></a>
          </div>

          <div className="col-8 mc-col-one">
            <h1 className="mc-main-heading mc-content">
              Make beautiful, <br />
              <span>conversion-focused</span>
              <br />
              websites
            </h1>
            <p className="mc-main-text mc-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <ul className="mc-content">
              <li>Amplify Online Conversions</li>
              <li>Conceptual Ecommerce Designs</li>
              <li>Easy Payment Module Integrations</li>
            </ul>
            <br />
            <a href="/">
              <div className="arrow-img rounded-circle mc-content">
                <img src={arrow} alt="" className="arrow-img" />
              </div>
              <span className="mc-content text-get">GET A QUOTE</span>
            </a>
            <span className="mc-content text-start">
              STARTING FROM &nbsp;<span className="price">$599</span>.99
            </span>
          </div>

          <div className="col-4 mc-laptop-col">
            <div className="mc-laptop-sub-container">
              <img src={laptop} alt="" className="laptop-img" />
            </div>
          </div>

          <div className="col-8 social-container">
            <a href="/">
              <span>FACEBOOK</span>
            </a>
            <a href="/">
              <span>TWITTER</span>
            </a>
            <a href="/">
              <span>INSTAGRAM</span>
            </a>
          </div>
          <div className="col-8">
            <hr />
          </div>

          <div className="col-2 mc-icon rounded-circle">
            <span>
              <img src={mail} alt="Logo" className="icons" />
            </span>
          </div>

          <div className="col-2 mc-icon-text">
            <span>INFO@EXAMPLE.COM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secone;
