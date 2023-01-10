import React from "react";
import "../header/Header.css";
import logo from "../header/LOGO.png";
import mail from "../header/Mail-icon.png";
import phone from "../header/Phone-icon.png";
function header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand text-success" href="/">
          <img src={logo} alt="Logo" height={30} />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" nav navbar-nav navbar-center text-left">
            <li className="nav-item active">
              <div className="container">
                <div className="row icon-row">
                  <div className="col-2 mc-icon-header bg-dark rounded-circle">
                    <span>
                      <img src={mail} alt="Logo" className="icons" />
                    </span>
                  </div>
                  <div className="col-3 mc-info">
                    <p>
                      <span>MAIL US</span> <br />
                      info@example.com
                    </p>
                  </div>
                  <div
                    className="col-2 mc-icon-header bg-dark rounded-circle"
                    style={{ marginLeft: "1px" }}
                  >
                    <span>
                      <img src={phone} alt="Logo" className="icons" />
                    </span>
                  </div>
                  <div className="col-3 mc-info ">
                    <p className="text-left">
                      <span>CALL US NOW</span> <br />
                      (123)-456-789002
                    </p>
                  </div>

                  <div className="col-1 ">
                    <button type="button" className="btn btn-danger header-btn">
                      GET A QUOTE
                    </button>
                  </div>

                  <div className="col-1 ">
                    <button type="button" className="btn btn-dark">
                      LIVE CHAT
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default header;
