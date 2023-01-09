import React from "react";
import "../Section-One/Secone.css";
import laptop from "../Section-One/Laptop.png";
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
          </div>

          <div className="col-4 mc-laptop-col">
            <img src={laptop} alt="" className="laptop-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secone;
