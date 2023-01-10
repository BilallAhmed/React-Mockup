import React from "react";
import "../About Us/about.css";
import aboutlp from "./assets/About-Laptop.png";
function about() {
  return (
    <div>
      <section className="about-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 mc-about-col-one">
              <div className="mc-laptop-about-container">
                <img src={aboutlp} alt="" className="mc-about-laptop" />
              </div>
            </div>

            <div className="col-6 mc-about-content">
              <h4>ABOUT US</h4>
              <h2 className="mc-main-about-heading">
                A strategic approach <br />
                <span>to website design &</span>
                <br />
                development
              </h2> &nbsp;
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
