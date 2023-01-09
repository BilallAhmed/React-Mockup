import React from "react";
import "../Section-One/Secone.css";
import laptop from "../Section-One/assets/Laptop.png";
import arrow from "../Section-One/assets/arrow.png"
function Secone() {
  return (
    <div>
      <div className="container-fluid my-5 mc-container">
        <div className="row my-4">
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
            <br/>
            <a href="/">
            <div className="arrow-img rounded-circle mc-content">
           <img src={arrow} alt="" className="arrow-img" />
            </div>
            <span className="mc-content text-get">GET A QUOTE</span>
            </a>
            <span className="mc-content text-start">STARTTING FROM <span className="price">$599</span></span>
          </div>

          <div className="col-4 mc-laptop-col">
        
            <div className="mc-laptop-sub-container">
            <img src={laptop} alt="" className="laptop-img" />
            </div>

            

          </div>
          </div>
      </div>
    </div>
  );
}

export default Secone;
